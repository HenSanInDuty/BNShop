from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from user.serializers import MyTokenObtainPairView
from . import views
from address import views as AddressViews
urlpatterns = [
    path('sign-up/', views.register, name='user-sign-up'),
    path('sign-in/',MyTokenObtainPairView.as_view(),name='user-sign-in'),
    path('sign-out/',views.LogoutAPIView.as_view(),name='sign-out'),
    path('sign-in/refresh/',TokenRefreshView.as_view(),name='user-sign-in-refresh'),
    path('profile/<int:id>/',views.Profile.as_view(),name='user-get-profile-by-id'),
    path('profile/change-password/',views.ChangePasswordView.as_view(),name='change-password'),
    path('profile/address/',AddressViews.AddressView.as_view(),name="address")
    #path('sign-up/agency/',views.registerAgency,name='user-agency-sign-up')
]
