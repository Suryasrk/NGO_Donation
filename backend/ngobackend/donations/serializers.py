from rest_framework import serializers
from .models import Donation

class DonationSerializer(serializers.ModelSerializer):

    cause_title = serializers.CharField(
        source='cause.title',
        read_only=True
    )

    class Meta:

        model = Donation

        fields = [
            'id',
            'cause',
            'cause_title',
            'amount',
            'transaction_id',
            'status',
            'donated_at'
        ]

        read_only_fields = [
            'donor'
        ]