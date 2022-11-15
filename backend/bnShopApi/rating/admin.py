from django.contrib import admin

from rating.models import Rate, Reply

# Register your models here.
admin.site.register([Rate,Reply])