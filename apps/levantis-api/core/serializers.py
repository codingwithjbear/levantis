from rest_framework import serializers
from .models import Item, Lead

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ["id", "name", "description", "created_at"]
        read_only_fields = ["id", "created_at"]

class LeadSerializer(serializers.ModelSerializer):
    website = serializers.CharField(required=False, allow_blank=True, write_only=True)

    class Meta:
        model = Lead
        fields = ["id", "name", "email", "message", "source_url", "website", "created_at"]
        read_only_fields = ["id", "created_at"]

    def validate(self, attrs):
        if attrs.get("website"):
            raise serializers.ValidationError("Invalid submission.")
        msg = attrs.get("message", "")
        if len(msg.strip()) < 10:
            raise serializers.ValidationError({"message": "Please provide a bit more detail."})
        return attrs