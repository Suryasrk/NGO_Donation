from rest_framework import generics
from .serializers import RegisterSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.views import (
    TokenObtainPairView
)

from .custom_jwt import (
    CustomTokenObtainPairSerializer
)

from .models import User

from causes.models import Cause
from donations.models import Donation

from django.db.models import Sum


class RegisterView(
        generics.CreateAPIView):

    serializer_class = RegisterSerializer


class CustomTokenObtainPairView(
        TokenObtainPairView):

    serializer_class = (
        CustomTokenObtainPairSerializer
    )


class UserListView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        users = User.objects.all()

        data = []

        for user in users:

            data.append({

                "id": user.id,

                "username": user.username,

                "email": user.email,

                "role": user.role,

                "phone": user.phone

            })

        return Response(data)


class AdminAnalyticsView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        total_users = User.objects.count()

        total_ngos = User.objects.filter(
            role="ngo"
        ).count()

        total_donors = User.objects.filter(
            role="donor"
        ).count()

        total_causes = Cause.objects.count()

        total_donations = Donation.objects.count()

        total_amount = Donation.objects.aggregate(
            total=Sum("amount")
        )["total"] or 0

        return Response({

            "total_users":
            total_users,

            "total_ngos":
            total_ngos,

            "total_donors":
            total_donors,

            "total_causes":
            total_causes,

            "total_donations":
            total_donations,

            "total_amount":
            total_amount

        })