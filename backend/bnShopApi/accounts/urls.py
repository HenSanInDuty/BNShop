from django.urls import include, path
from rest_framework_simplejwt.views import TokenRefreshView
from .serializers import MyTokenObtainPairView
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('sign-up/customer/', views.register_customer, name='user-customer-sign-up'),
    path('sign-up/agency/',views.register_agency,name="user-agency-sign-up"),
    path('sign-in/',MyTokenObtainPairView.as_view(),name='user-sign-in'),
    path('sign-out/',views.LogoutAPIView.as_view(),name='sign-out'),
    path('sign-in/refresh/',TokenRefreshView.as_view(),name='user-sign-in-refresh'),
    path('profile/',views.ProfileView.as_view(),name='profile'),
    path('profile/change-password/',views.ChangePasswordView.as_view(),name='change-password'),
    path('test/',views.ggAuthen,name="gg-authen"),
    path('gg/', include('allauth.urls')),
]
