from django.db import models
from causes.models import Cause
from accounts.models import User


class Campaign(models.Model):

    STATUS_CHOICES = (
        ('active', 'Active'),
        ('completed', 'Completed'),
    )

    title = models.CharField(max_length=200)

    description = models.TextField()

    cause = models.ForeignKey(
        Cause,
        on_delete=models.CASCADE
    )

    target_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    collected_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    image = models.ImageField(
        upload_to='campaigns/',
        blank=True,
        null=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='active'
    )

    created_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title
