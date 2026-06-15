from rest_framework.routers import DefaultRouter
from .views import DonationViewSet,DonorDashboardView
from django.urls import path


router = DefaultRouter()

router.register(
    'donations',
    DonationViewSet,
    basename='donations'
)

urlpatterns = router.urls

urlpatterns += [

    path(
        'dashboard/',
        DonorDashboardView.as_view()
    )

]