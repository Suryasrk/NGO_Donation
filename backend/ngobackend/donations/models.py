from django.db import models
from accounts.models import User
from causes.models import Cause


class Donation(models.Model):

    donor = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    cause = models.ForeignKey(
        Cause,
        on_delete=models.CASCADE
    )

    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    transaction_id = models.CharField(
        max_length=100
    )

    status = models.CharField(
        max_length=20,
        default='success'
    )

    donated_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.transaction_id
