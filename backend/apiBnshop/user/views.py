from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from address.forms import AddressForm
from address.models import AddressProfile
from .utilities import get_tokens_for_user
from .forms import AgencyRegisterForm, UserRegisterForm
from customer.forms import CustomerForm
from customer.models import CustomerProfile
from angency.models import AgencyProfile
from django.contrib.auth.models import User
import sys
# Create your views here.

def getValueInForm(form, key):
    return form.cleaned_data.get(key)    

@api_view(['POST'])
def register(request):
    try:
        #Init some form
        rolesValid = ('Admin', 'Customer', 'Agency')
        form = UserRegisterForm(request.data)
        subform = AgencyRegisterForm(request.data)
        cusform = CustomerForm(request.data)
        addressForm = AddressForm(request.data)
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
                #Form register for agency
                if (role == 'Agency'):
                    if subform.is_valid():
                        AgencyProfile.objects.create(user=user)
                        user.profile.dl_name = getValueInForm(subform,'dl_name')
                        user.profile.dl_avatar = getValueInForm(subform,'dl_avatar')
                        user.profile.dl_email = getValueInForm(subform,'dl_email')
                        user.profile.dl_sdt = user.username
                        user.profile.dl_cmnd = getValueInForm(subform,'dl_cmnd')
                        user.profile.save()
                    else:
                        user.delete()
                        return Response(subform.errors)
                #Form register for customer
                elif (role == 'Customer'):
                    if cusform.is_valid():
                        CustomerProfile.objects.create(user=user,
                                                       kh_ho=getValueInForm(cusform,'kh_ho'),
                                                       kh_ten=getValueInForm(cusform,'kh_ten'),
                                                       kh_avatar=getValueInForm(cusform,'kh_avatar'),
                                                       kh_email=getValueInForm(cusform,'kh_email'),
                                                       kh_sdt=user.username,
                                                       kh_ngay_sinh=getValueInForm(cusform,'kh_ngay_sinh'),
                                                       kh_gioi_tinh=getValueInForm(cusform,'kh_gioi_tinh'))
                        user.cus_profile.save()
                    else:
                        user.delete()
                        return Response(cusform.errors)
                #After fill profile then user fill the address form
                if addressForm.is_valid():
                    AddressProfile.objects.create(user=user,
                                                  dc_tinh=getValueInForm(addressForm,'dc_tinh'),
                                                  dc_quan=getValueInForm(addressForm,'dc_quan'),
                                                  dc_phuong=getValueInForm(addressForm,'dc_phuong'),
                                                  dc_chitiet=getValueInForm(addressForm,'dc_chitiet'))
                    
                else:
                    user.delete()
                    return Response(addressForm.errors)
                user.save()
                token = get_tokens_for_user(user)
            #Token with access and refresh
            return Response(token)
        return Response(form.errors)
    except Exception:
        print(sys.exc_info()[0])
        #Roll back when have exception
        user.delete()