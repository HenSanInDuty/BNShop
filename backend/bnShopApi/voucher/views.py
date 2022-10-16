from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes,api_view
from drf_yasg.utils import swagger_auto_schema
from permissions.permissions import AgencyPermission
from voucher.models import Type

from voucher.serializers import VoucherSerializer,VoucherTypeSerializer
# Create your views here.
# @swagger_auto_schema()
# @api_view()
# def init_voucher_type(request):
#     for i in range(1,3):
#         for j in range(1,3):
#             Type.objects.create(condition = i,type=j)
#     return Response({"message":'init'})

@swagger_auto_schema()
class VoucherViewAll(generics.GenericAPIView):
    serializer_class = VoucherSerializer
    permission_classes = []
    
    def get_permissions(self):
        per = super().get_permissions()
        if self.request.method != "GET":
            return [*per,IsAuthenticated(),AgencyPermission()]
        else:
            return per
        
    def post(self,request,*kwargs):
        return Response()
