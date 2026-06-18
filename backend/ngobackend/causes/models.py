from django.db import models
from django.conf import settings

class Cause(models.Model):

    CATEGORY_CHOICES = (
        ('education', 'Education'),
        ('healthcare', 'Healthcare'),
        ('hunger', 'Hunger'),
        ('environment', 'Environment'),
    )

    title = models.CharField(max_length=200)

    description = models.TextField()

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES
    )

    goal_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    raised_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    image = models.ImageField(
        upload_to='causes/',
        blank=True,
        null=True
    )

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title
