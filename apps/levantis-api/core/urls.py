from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ItemViewSet, health

router = DefaultRouter()
router.register("items", ItemViewSet, basename="item")

urlpatterns = [
    path("", health, name="api-root"),   # put this before the router
    path("health/", health, name="health"),
    path("", include(router.urls)),
]