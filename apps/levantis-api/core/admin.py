from django.contrib import admin
from .models import Lead

admin.site.site_header = "GoLevantis Admin"
admin.site.site_title = "GoLevantis Admin"
admin.site.index_title = "Dashboard"
@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ("created_at", "name", "email", "status", "source_url_short")
    list_filter = ("status", "created_at")
    search_fields = ("name", "email", "message")
    readonly_fields = ("id", "created_at", "ip_address", "user_agent")
    date_hierarchy = "created_at"
    ordering = ("-created_at",)

    actions = ("mark_reviewed", "mark_spam")

    def source_url_short(self, obj):
        return (obj.source_url or "")[:60]
    source_url_short.short_description = "Source URL"

    def mark_reviewed(self, request, queryset):
        updated = queryset.update(status=Lead.Status.REVIEWED)
        self.message_user(request, f"{updated} lead(s) marked as reviewed.")
    mark_reviewed.short_description = "Mark selected as reviewed"

    def mark_spam(self, request, queryset):
        updated = queryset.update(status=Lead.Status.SPAM)
        self.message_user(request, f"{updated} lead(s) marked as spam.")
    mark_spam.short_description = "Mark selected as spam"