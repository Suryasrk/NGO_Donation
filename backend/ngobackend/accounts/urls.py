from django.urls import path

from .views import (
    RegisterView,
    CustomTokenObtainPairView,
    UserListView
)

from rest_framework_simplejwt.views import (
    TokenRefreshView
)

from .views import (
    RegisterView,
    CustomTokenObtainPairView,
    UserListView,
    AdminAnalyticsView
)

urlpatterns = [

    path(
        'register/',
        RegisterView.as_view()
    ),

    path(
        'login/',
        CustomTokenObtainPairView.as_view()
    ),

    path(
        'refresh/',
        TokenRefreshView.as_view()
    ),

    path(
        'users/',
        UserListView.as_view()
    ),
    path(
    'analytics/',
    AdminAnalyticsView.as_view()
),

]