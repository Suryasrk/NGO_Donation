from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from causes.models import Cause
from donations.models import Donation
from campaigns.models import Campaign
from events.models import Event

from django.db.models import Sum


class DashboardView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        total_causes = Cause.objects.count()

        total_campaigns = Campaign.objects.count()

        total_events = Event.objects.count()

        total_donations = Donation.objects.count()

        total_amount = Donation.objects.aggregate(
            total=Sum('amount')
        )['total'] or 0

        return Response({

            "total_causes": total_causes,

            "total_campaigns": total_campaigns,

            "total_events": total_events,

            "total_donations": total_donations,

            "total_amount_raised": total_amount

        })
class RecentDonationsView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        donations = Donation.objects.order_by(
            '-donated_at'
        )[:5]

        data = []

        for donation in donations:

            data.append({

                "donor": donation.donor.username,

                "cause": donation.cause.title,

                "amount": donation.amount,

                "date": donation.donated_at

            })

        return Response(data)
