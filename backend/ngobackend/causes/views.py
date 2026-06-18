from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Cause
from .serializers import CauseSerializer
from .permissions import IsNGOManager


class CauseViewSet(viewsets.ModelViewSet):

    queryset = Cause.objects.all()
    serializer_class = CauseSerializer

    def get_permissions(self):

        # Anyone can view causes
        if self.action in ['list', 'retrieve']:
            return []

        # Only NGO Manager can create/update/delete
        return [IsAuthenticated(), IsNGOManager()]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)