from dataclasses import field
from django import forms
from django.contrib.auth.models import User
from angency.models import AgencyProfile
from django.contrib.auth.forms import UserCreationForm

class UserRegisterForm(UserCreationForm):
    role = forms.CharField(max_length=20)
    
    class Meta:
        model=User
        fields= ['username','password1','password2','role']

class AgencyRegisterForm(forms.ModelForm):
    class Meta:
        model=AgencyProfile
        fields= ['dl_name','dl_avatar','dl_email','dl_sdt','dl_cmnd']