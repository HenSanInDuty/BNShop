from rest_framework import permissions
from django.contrib.auth.models import User
from rest_framework_simplejwt.authentication import JWTAuthentication
#Config agency permission for user
class AgencyPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        token = JWTAuthentication().authenticate(request)
        if token[1]['role'] == 'Agency':
            return True
        else:
            return False
        