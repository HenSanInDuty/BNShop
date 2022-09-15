from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .serializers import MyTokenObtainPairView
from . import views

urlpatterns = [
    path('sign-up/', views.register, name='user-sign-up'),
    path('sign-in/',MyTokenObtainPairView.as_view(),name='user-sign-in'),
    path('sign-out/',views.LogoutAPIView.as_view(),name='sign-out'),
    path('sign-in/refresh/',TokenRefreshView.as_view(),name='user-sign-in-refresh'),
]
