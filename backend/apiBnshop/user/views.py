from re import sub
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from permission.permission import AgencyPermission
from .serializers import MyTokenObtainPairView
from .forms import UserRegisterForm
from .utilities import get_tokens_for_user
from .forms import AgencyRegisterForm
from angency.models import AgencyProfile
from django.contrib.auth.models import User
import sys
# Create your views here.

def getValueInForm(form, key):
    return form.cleaned_data.get(key)

@api_view(['POST'])
def register(request):
    try:
        rolesValid = ('Admin', 'Customer', 'Agency')
        form = UserRegisterForm(request.data)
        subform = AgencyRegisterForm(request.data)
        if form.is_valid():
            # Check role is valid
            role = form.cleaned_data.get('role')
            if (role not in rolesValid):
                return Response({'role':'Role is not valid'})
            else:
                #Save init user
                user = form.save()
                user.refresh_from_db()
                user.accountProfile.role = role
                #Agency register
                if (role == 'Agency'):
                    if subform.is_valid():
                        agencyProfile = subform.cleaned_data.items
                        print(agencyProfile)
                        AgencyProfile.objects.create(user=user)
                        # user.profile.dl_name = getValueInForm(subform,'dl_name')
                        # user.profile.dl_avatar = getValueInForm(subform,'dl_avatar')
                        # user.profile.dl_email = getValueInForm(subform,'dl_email')
                        # user.profile.dl_sdt = getValueInForm(subform,'dl_sdt')
                        # user.profile.dl_cmnd = getValueInForm(subform,'dl_cmnd')
                        user.profile = {**agencyProfile}
                        user.profile.save()
                    else:
                        return Response(subform.errors)
                user.save()
                token = get_tokens_for_user(user)
            return Response({'userid':user.id,**token})
        return Response(form.errors)
    except Exception:
        print(sys.exc_info()[0])
        user.delete()

# @api_view(['POST'])
# @permission_classes([IsAuthenticated,AgencyPermission])
# def registerAgency(request):
#     try:
#         form = AgencyRegisterForm(request.data)
#         if form.is_valid():
#             #userId = form.cleaned_data.get('user_id')
#             #user = User.objects.all().filter(id=userId)
#             #print(user)
            
#             agencyProfile = form.cleaned_data.get('user')
#             print(agencyProfile.id)
#             #print(agencyProfile)
#             return Response({"ok":"ok"})
#         else:
#             return Response(form.errors)
#     except Exception:
#         print(sys.exc_info()[0])
    
