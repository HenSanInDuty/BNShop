from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .forms import UserRegisterForm
# Create your views here.
@api_view(['POST'])
def register(request):
    form = UserRegisterForm(request.data)
    if form.is_valid():
        user = form.save()
        user.refresh_from_db()
        user.profile.role = form.cleaned_data.get('role')
        user.save()
        return Response(form.data)
    return Response(form.errors)