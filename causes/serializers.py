from rest_framework import serializers
from .models import Cause

class CauseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cause
        fields = '__all__'
        read_only_fields = ['created_by']