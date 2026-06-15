from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):

    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('ngo', 'NGO Manager'),
        ('donor', 'Donor'),
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='donor'
    )

    phone = models.CharField(max_length=15, blank=True)
