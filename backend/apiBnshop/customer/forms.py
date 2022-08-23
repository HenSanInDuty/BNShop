from dataclasses import fields
from django import forms
from .models import CustomerProfile

class CustomerForm(forms.ModelForm):
    class Meta:
        model=CustomerProfile
        fields = ['kh_ho','kh_ten','kh_avatar','kh_email','kh_ngay_sinh','kh_gioi_tinh']
        
