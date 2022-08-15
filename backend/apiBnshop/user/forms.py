from dataclasses import field
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class UserRegisterForm(UserCreationForm):
    role = forms.CharField(max_length=20)
    
    class Meta:
        model=User
        fields= ['username','password1','password2','role']

class AgencyRegisterForm(forms.Form):
    
    
    class Meta:
        model=User
        fields= ['username','password1','password2','role']