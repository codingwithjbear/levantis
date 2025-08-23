from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework import status, permissions, throttling, viewsets
from django.conf import settings
from django.core.mail import send_mail
from .models import Item, Lead
from .serializers import ItemSerializer, LeadSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by("-created_at")
    serializer_class = ItemSerializer


# allow HEAD/OPTIONS in addition to GET so curl -I works
@api_view(["GET", "HEAD", "OPTIONS"])
def health(request):
    return Response({"status": "👻"})


class LeadThrottle(throttling.ScopedRateThrottle):
    scope = "leads"


class LeadCreateView(APIView):
    permission_classes = [permissions.AllowAny]
    throttle_classes = [LeadThrottle]

    def post(self, request):
        data = request.data.copy()
        # Enrich with request metadata
        ip = request.META.get("HTTP_X_FORWARDED_FOR", request.META.get("REMOTE_ADDR", "")).split(",")[0].strip()
        ua = request.META.get("HTTP_USER_AGENT", "")
        serializer = LeadSerializer(data=data)
        if serializer.is_valid():
            lead = Lead.objects.create(
                name=serializer.validated_data["name"],
                email=serializer.validated_data["email"],
                message=serializer.validated_data["message"],
                source_url=serializer.validated_data.get("source_url", ""),
                ip_address=ip or None,
                user_agent=ua[:1000],
            )
            self._notify_emails(lead)      
            self._thank_user(lead)         
            return Response({"id": str(lead.id), "status": "ok"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def _notify_emails(self, lead: Lead):
        subject = f"New Lead: {lead.name}"
        body = (
            f"Name: {lead.name}\n"
            f"Email: {lead.email}\n"
            f"Source: {lead.source_url}\n"
            f"IP: {lead.ip_address}\n"
            f"UA: {lead.user_agent}\n\n"
            f"Message:\n{lead.message}\n"
        )
        recipient = getattr(settings, "CONTACT_EMAIL", None) or getattr(settings, "DEFAULT_TO_EMAIL", None)
        if recipient:
            send_mail(
                subject=subject,
                message=body,  # plain text
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[recipient],
                fail_silently=True,  # don’t 500 the API if email fails
            )

    def _thank_user(self, lead: Lead):
        """Send a transactional thank-you email to the user who submitted the lead."""
        if not lead.email:
            return
        first = (lead.name or "").strip().split(" ")[0] or "there"
        subject = "Thanks for contacting Levantis"
        text = (
            f"Hi {first},\n\n"
            f"Thanks for reaching out — we got your message and a human will reply shortly.\n\n"
            f"Summary you sent:\n"
            f"{lead.message}\n\n"
            f"— Levantis Team\n"
            f"https://golevantis.com\n"
        )

        try:
            send_mail(
                subject=subject,
                message=text,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[lead.email],
                fail_silently=True,   # never block the API on email issues
                html_message=(
                    f"<p>Hi {first},</p>"
                    f"<p>Thanks for reaching out — we received your message and a human will reply shortly.</p>"
                    f"<p><strong>Summary you sent:</strong><br/>{lead.message}</p>"
                    f"<p>— Levantis Team<br/>"
                    f"<a href='https://golevantis.com'>golevantis.com</a></p>"
                ),
            )
        except Exception:
            # belt & suspenders: we already used fail_silently, so this is just in case
            pass