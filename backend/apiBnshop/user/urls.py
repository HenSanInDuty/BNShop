from django.urls import path, include
from . import views

urlpatterns = [
    path('sign-up/', views.register, name='user-sign-up')
]
