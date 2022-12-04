import datetime
from rest_framework import serializers
from orders.models import STATUS, SUB_STATUS_CHOICES, StatusShippingNote

class StatusShippingNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatusShippingNote
        fields = ['note','substatus','order_detail','shipper','image']