from .serializers import MyTokenObtainPairViewSerializer
def get_tokens_for_user(user):
    token = MyTokenObtainPairViewSerializer().get_token(user=user)
    return {
        'refresh': str(token),
        'access': str(token.access_token),
    }