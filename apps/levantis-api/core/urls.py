from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ItemViewSet, health, LeadCreateView

router = DefaultRouter()
router.register("items", ItemViewSet, basename="item")

urlpatterns = [
    path("health/", health, name="health"),
    path("", include(router.urls)),
    path("leads/", LeadCreateView.as_view(), name="lead-create"),
]