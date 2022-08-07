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
    form = UserRegisterForm(request.data)
    if form.is_valid():
        user = form.save()
        user.refresh_from_db()
        user.profile.role = form.cleaned_data.get('role')
        user.save()
        token = get_tokens_for_user(user)
        return Response(token)
    return Response(form.errors)
