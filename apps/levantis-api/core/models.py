import uuid
from django.db import models

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
class Lead(models.Model):
    class Status(models.TextChoices):
        NEW = "new", "New"
        REVIEWED = "reviewed", "Reviewed"
        SPAM = "spam", "Spam"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=120)
    email = models.EmailField()
    message = models.TextField(max_length=5000)
    source_url = models.URLField(blank=True, default="")
    status = models.CharField(max_length=16, choices=Status.choices, default=Status.NEW)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.TextField(blank=True, default="")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [
            models.Index(fields=["created_at"]),
            models.Index(fields=["status"]),
            models.Index(fields=["email"]),
        ]

    def __str__(self):
        return f"{self.name} <{self.email}>"