from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serilizers import ProvinceSerilizer
from .models import Province as ProvinceModel
from permission.permission import AgencyPermission
# Create your views here.
class Province(APIView):
    permission_classes = [IsAuthenticated, AgencyPermission]
    def get(self, request):
        province = ProvinceModel.objects.all()
        data = ProvinceSerilizer(province, many=True)
        return Response(data.data)
    
    def post(self,request):
        print(JWTAuthentication.authenticate(self=self,request=request))
        return Response(request.data)