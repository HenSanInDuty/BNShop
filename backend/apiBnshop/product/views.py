import sys
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from rest_framework.decorators import api_view, permission_classes

from product import serializers

from . import models as productModels
from . import serializers as productSerializers
from permission import permission


def getProductInfo(id):
    product = productModels.Product.objects.get(id=id)
    data = {
        'sp_ten':
        product.sp_ten,
        'sp_moTaSanPham':
        product.sp_moTaSanPham,
        'sp_soLuong':
        product.sp_soLuong,
        'sp_gia':
        product.price.all().last().g_gia,
        'sp_chiTiet':
        list(
            map(
                lambda p: {
                    'tieuDe': p.__dict__['ctsp_tieuDe'],
                    'noiDung': p.__dict__['ctsp_noiDung']
                }, product.detail.all())),
        'sp_daiLy':
        product.user.profile.dl_name
    }
    return data

def getDetailProduct(id):
    product = productModels.Product.objects.get(id=id)
    return list(
            map(
                lambda p: {
                    'id':p.__dict__['id'],
                    'ctsp_tieuDe': p.__dict__['ctsp_tieuDe'],
                    'ctsp_noiDung': p.__dict__['ctsp_noiDung']
                }, product.detail.all()))


# Create your views here.
class ProductTypeViews(generics.GenericAPIView):
    serializer_class = productSerializers.ProductTypeSerializer
    model = productModels.ProductType

    def get_permissions(self):
        if self.request.method == 'GET':
            return [IsAuthenticated()]
        else:
            return [IsAuthenticated(), permission.AgencyPermission()]

    def get(self, request, *args):
        items = productModels.ProductType.objects.all()
        serializer = productSerializers.ProductTypeSerializer(items, many=True)

        return Response(serializer.data)

    def post(self, request, *args):
        types_exists = self.model.objects.all().values_list('loai_ten',
                                                            flat=True)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            if (serializer.validated_data.get('loai_ten') in types_exists):
                return Response({'message': 'Đã có loại này rồi'})
            else:
                serializer.save()
                return Response(serializer.data)
        else:
            return Response(serializer.errors)


class ProductViewsAll(generics.GenericAPIView):
    model = productModels.Product
    serializer_class = productSerializers.ProductSerializer

    def get_permissions(self):
        if self.request.method != 'GET':
            return [IsAuthenticated(), permission.AgencyPermission()]
        else:
            return []

    def get(self, request, *arg):
        all_product = self.model.objects.all()
        serializer = self.serializer_class(all_product, many=True)
        items = []
        for item in serializer.data:
            ## custom item for add to reponse
            addtional = getProductInfo(item.get('id'))
            items.append(addtional)
        return Response(items)

    def post(self, request, *arg):
        #serializers
        data = request.data
        #Add user info to request data
        data['user'] = request.user.id
        #Get data from request
        serializer = self.serializer_class(data=data)
        if (serializer.is_valid()):
            product = serializer.save()
            id_product = product.id
            data['product'] = id_product
            #Price of product
            serializerPrice = productSerializers.ProductPriceSerializer(
                data=data)

            if (serializerPrice.is_valid()):
                serializerPrice.save()
            else:
                self.model.objects.get(id=id_product).delete()
                return Response(serializerPrice.errors)

            #Add many detail

            for detail in data['chiTiet']:
                detail['product'] = id_product
                #Detail of product
                serializerDetail = productSerializers.ProductDetailSerializer(
                    data=detail)
                if (serializerDetail.is_valid()):
                    serializerDetail.save()
                else:
                    self.model.objects.get(id=id_product).delete()
                    return Response(serializerDetail.errors)
            return Response(getProductInfo(id_product))
        else:
            return Response(serializer.errors)


class ProductViewsDetail(generics.GenericAPIView):
    model = productModels.Product
    serializer_class = productSerializers.ProductSerializer

    def get_permissions(self):
        if self.request.method != 'GET':
            return [IsAuthenticated(), permission.AgencyPermission()]
        else:
            return []

    def get(self, request, id, **kwargs):
        try:
            return Response(getProductInfo(id))
        except:
            return Response({"message": "something wrong"})

    def patch(self, request, id, **kwargs):
        try:
            #Get product
            product = self.model.objects.get(id=id)
            #Get infor serializer of product
            serializerOrigin = self.serializer_class(product)
            #Get data request
            data = {**serializerOrigin.data, **request.data}
            serializer = self.serializer_class(product, data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors)
        except:
            return Response({"message": "something wrong"})


@api_view(['POST'])
@permission_classes([IsAuthenticated, permission.AgencyPermission])
def updatePrice(request, id):
    try:
        serializer = serializers.ProductPriceSerializer(data={
            "product": id,
            **request.data
        })
        if (serializer.is_valid()):
            serializer.save()
            return Response({"message": "Update price success"})
        else:
            return Response(serializer.errors)
    except Exception:
        print(sys.exc_info()[0])
        return Response({"message": "something wrong"})


class ProductDetailViews(generics.GenericAPIView):
    permission_classes = [IsAuthenticated, permission.AgencyPermission]

    def get(self,request,id):
        product = productModels.Product.objects.get(id=id)
        serializer = serializers.ProductDetailSerializer(product.detail.all(),many=True)
        try:
            return Response(serializer.data)
        except:
            return Response({
                'message':"Not found this product"
            })
    
    def post(self,request, id):
        
        def saveDetail(serializer):
            productNew = serializer.save()
            return {
                'id':productNew.id,
                            'ctsp_tieuDe':productNew.ctsp_tieuDe,
                            'ctsp_noiDung':productNew.ctsp_noiDung,
            }
            
        try:
            #Get product
            items = []
            for data in request.data:
                data['product'] = id
                #If product detail have id, this will be a update request
                if ('id' in data.keys()):
                    detail = productModels.ProductDetail.objects.get(id=data['id'])
                    serializer = serializers.ProductDetailSerializer(detail,data=data)
                    if (serializer.is_valid()):
                        items.append(saveDetail(serializer))
                    else:
                        return Response(serializer.errors)
                #Or not, it will add new detail for product
                else:
                    serializer = serializers.ProductDetailSerializer(data=data)
                    if (serializer.is_valid()):
                        items.append(saveDetail(serializer))
                    else:
                        return Response(serializer.errors)
            return self.get(request,id)
        except Exception:
            print(sys.exc_info()[0])
            return Response({"message": "something wrong"})
    
    




