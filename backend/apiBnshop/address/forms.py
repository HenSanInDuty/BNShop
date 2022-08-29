from dataclasses import fields
from django import forms
from . import models

class AddressForm(forms.ModelForm):
    class Meta:
        model=models.AddressProfile
        fields = ['dc_tinh','dc_quan','dc_phuong','dc_chitiet']