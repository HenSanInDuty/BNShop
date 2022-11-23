from rest_framework import permissions
 
class AgencyPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user.is_agency

class AdminPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user.is_admin

class AgencyShipperMixPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user.is_shipper | request.user.is_agency

class ShipperPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user.is_shipper