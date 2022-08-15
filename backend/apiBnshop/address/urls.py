from django.urls import path
from rest_framework_simplejwt.views import TokenVerifyView
from .views import Province 

urlpatterns = [
    path('app-province/',Province.as_view(),name='app-province')
]
