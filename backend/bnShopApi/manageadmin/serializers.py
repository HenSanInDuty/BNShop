from rest_framework import serializers

class AccountViewSeralizer(serializers.Serializer):
  phone = serializers.CharField(max_length=10, required = False)
  date_joined = serializers.DateTimeField(required = False)
  is_active = serializers.BooleanField(required = False)
  name = serializers.CharField(max_length=100,required = False)
  email = serializers.EmailField(required = False)
  avatar = serializers.CharField(max_length=3000,required = False)
  nationality = serializers.CharField(max_length=100,required = False)
  gender = serializers.CharField(max_length=1,required = False)
  main_industry = serializers.CharField(max_length=100,required = False)
  identify = serializers.CharField(max_length=12,required = False)
  follow = serializers.ListField(required = False)
  visit = serializers.ListField(required = False)
  nickname = serializers.CharField(max_length=100,required = False)
  birthday = serializers.DateField(required = False)
  companyName = serializers.CharField(max_length=3000,required = False)