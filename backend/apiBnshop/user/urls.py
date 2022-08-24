from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from user.serializers import MyTokenObtainPairView
from . import views

urlpatterns = [
    path('sign-up/', views.register, name='user-sign-up'),
    path('sign-in/',MyTokenObtainPairView.as_view(),name='user-sign-in'),
    path('sign-in/refresh/',TokenRefreshView.as_view(),name='user-sign-in-refresh'),
    path('profile/<int:id>',views.Profile.as_view(),name='user-get-profile-by-id'),
    #path('sign-up/agency/',views.registerAgency,name='user-agency-sign-up')
]
