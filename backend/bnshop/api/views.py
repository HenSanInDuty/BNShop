from json import JSONDecodeError
from products.models import Products
from django.forms.models import model_to_dict
from rest_framework.decorators import api_view
from rest_framework.response import Response
from products.serializers import ProductsSerializer
# Create your views here.
@api_view(["GET","POST"])
def api_home(request, *args,**kwargs):
    model_data = ProductsSerializer(Products.objects.all().first()).data
    print(model_data)
    if request.GET:
        id = request.GET.get('id')
        if request.GET.get('id'):
            try:
                return Response(model_data)
            except IndexError:
                return Response(model_data)
        else:
            return Response(model_data)
    return Response(model_data)
    
    