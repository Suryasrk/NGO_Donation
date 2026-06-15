from django.urls import path
from .views import DashboardView,RecentDonationsView

urlpatterns = [

    path(
        'dashboard/',
        DashboardView.as_view()
    ),
    path(
    'recent-donations/',
    RecentDonationsView.as_view()
),

]