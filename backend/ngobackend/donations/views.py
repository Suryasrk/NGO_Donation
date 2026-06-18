from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Donation
from .serializers import DonationSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Sum


class DonationViewSet(viewsets.ModelViewSet):

    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Donation.objects.filter(
            donor=self.request.user
        )

    def perform_create(self, serializer):

        donation = serializer.save(
            donor=self.request.user
        )

        if donation.status == "success":

            cause = donation.cause
            cause.raised_amount += donation.amount
            cause.save()

class DonorDashboardView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        donations = Donation.objects.filter(
            donor=request.user
        )

        total_donations = donations.count()

        total_amount = donations.aggregate(
            total=Sum('amount')
        )['total'] or 0

        return Response({

            "total_donations": total_donations,

            "total_amount": total_amount

        })