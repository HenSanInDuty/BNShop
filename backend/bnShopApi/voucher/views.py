from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema
from permissions.permissions import AgencyPermission
from voucher.models import Type, Voucher

from voucher.serializers import CreateVoucherSerializer, VoucherTypeSerializer
# Create your views here.
@swagger_auto_schema()
@api_view()
def init_voucher_type(request):
    for i in range(0,2):
        for j in range(0,2):
            Type.objects.create(condition = i,type=j)
    return Response({"message":'init'})

@swagger_auto_schema()
class VoucherTypeView(generics.GenericAPIView):
    serializer_class = VoucherTypeSerializer
    permission_classes = [IsAuthenticated]

    def get(self,request,**kwargs):
        all_type_voucher = Type.objects.all()
        serializer = self.serializer_class(all_type_voucher,many=True)
        return Response(serializer.data)

@swagger_auto_schema()
class VoucherViewAll(generics.GenericAPIView):
    serializer_class = CreateVoucherSerializer
    permission_classes = [IsAuthenticated]
    
    def get_permissions(self):
        per = super().get_permissions()
        if self.request.method != "GET":
            return [*per,AgencyPermission()]
        else:
            return per
        
    def post(self,request,**kwargs):
        serializer = self.serializer_class(data= request.data, context = {'agency':request.user.user.agency})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

@swagger_auto_schema()
class VoucherViewDetail(generics.GenericAPIView):
    serializer_class = CreateVoucherSerializer
    permission_classes = [IsAuthenticated,AgencyPermission]

    def delete(self,request,id,**kwargs):
        vou_obj = Voucher.objects.filter(id=id).first()
        if vou_obj:
            vou_obj.is_delete = True
        return Response({
            'message':'Delete voucher success'
        }, status=status.HTTP_200_OK)

