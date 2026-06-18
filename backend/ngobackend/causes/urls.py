from rest_framework.routers import DefaultRouter
from .views import CauseViewSet

router = DefaultRouter()
router.register('causes', CauseViewSet)

urlpatterns = router.urls