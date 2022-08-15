from urllib import response
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from .serializers import MyTokenObtainPairView
from .forms import UserRegisterForm
from .utilities import get_tokens_for_user
# Create your views here.


@api_view(['POST'])
def register(request):
    rolesValid = ('Admin', 'Customer', 'Agency')
    form = UserRegisterForm(request.data)
    role = form.cleaned_data.get('role')
    if role not in rolesValid:
        return Response({'role': 'Not have this role'})
    
    
    
    if form.is_valid():
        # Check role is valid
        user = form.save()
        user.refresh_from_db()
        user.accountProfile.role = role
        user.save()
        token = get_tokens_for_user(user)
        return Response(token)
    return Response(form.errors)


