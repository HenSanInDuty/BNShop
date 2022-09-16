from rest_framework import permissions
 
class AgencyPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user.user.is_agency
