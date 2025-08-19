from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Item
from .serializers import ItemSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by("-created_at")
    serializer_class = ItemSerializer

# allow HEAD/OPTIONS in addition to GET so curl -I works
@api_view(["GET", "HEAD", "OPTIONS"])
def health(request):
    return Response({"status": "👻"})