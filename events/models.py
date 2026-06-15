from django.db import models
from accounts.models import User


class Event(models.Model):

    title = models.CharField(max_length=200)

    description = models.TextField()

    event_date = models.DateField()

    location = models.CharField(max_length=255)

    image = models.ImageField(
        upload_to='events/',
        blank=True,
        null=True
    )

    organizer = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title
