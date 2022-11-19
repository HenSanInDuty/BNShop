from django.forms import ValidationError
from pkg_resources import require
from rest_framework import serializers
from rest_framework.fields import CurrentUserDefault

from products.models import Attachment, Brand, Category, Price, Product, Quantity, Type, Detail

class CategorySwagger(serializers.Serializer):
    name = serializers.CharField(max_length=100)

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = "__all__"

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = "__all__"
        
class DetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detail
        fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = "__all__"

class QuantitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Quantity
        fields = "__all__"
        
class AttachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attachment
        fields = "__all__"

class ProductRegisterSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    name = serializers.CharField(max_length=100, required=True)
    display_image = serializers.CharField(max_length=100, required=True)
    category = serializers.ListField(required = False,write_only=True)
    type = serializers.ListField(required=True,write_only=True)
    brand_origin = serializers.CharField(max_length=100,required = True)
    brand_origin_brand = serializers.CharField(max_length=100,required = True)
    brand_name = serializers.CharField(max_length=100,required=True)
    detail = serializers.JSONField(required=False)
    quantity = serializers.IntegerField(required=True)
    price = serializers.FloatField(required=True)
    attachment = serializers.JSONField(required=False)

    def validate(self, attrs):
        content = super().validate(attrs)
        if content['quantity']<1:
            raise serializers.ValidationError({"quantity":"Quantity must greater than 1"})
        if content['price']<0:
            raise serializers.ValidationError({"quantity":"Quantity must greater than 0"})            
        return content
    
    def create(self,validated_data):
        TYPES_ATTACHMENT = ('2D','3D','Video')
        agency = self.context.get('request').user.user.agency
        if Brand.objects.filter(name=validated_data['brand_name'],
                                origin=validated_data['brand_origin']):
            
            brand = Brand.objects.filter(origin=validated_data['brand_origin'],
                                     origin_brand=validated_data['brand_origin_brand'],
                                     name=validated_data['brand_name'])[0]
        else:
            brand = Brand.objects.create(origin=validated_data['brand_origin'],
                                     origin_brand=validated_data['brand_origin_brand'],
                                     name=validated_data['brand_name'])
        
        product = Product.objects.create(name=validated_data['name'],
                                         display_image=validated_data['display_image'],
                                         brand=brand,)
        Quantity.objects.create(quantity=validated_data['quantity'],
                                           product=product)
        Price.objects.create(price=validated_data['price'],
                                     product=product)
        
        for type in validated_data['type']:
            try:
                t = Type.objects.get(id=int(type))
                product.type.add(t)
                product.save()
            except ValueError:
                raise serializers.ValidationError({"type":"type must be a number"})
            except Exception:
                raise serializers.ValidationError({"type":"can't find this type"})
            
        if validated_data.get('detail'):
            try:
                for detail in validated_data['detail']:
                    if detail['title'] and detail['content']:
                        dt = Detail.objects.create(title=detail['title'],
                                                content=detail['content'])
                        product.detail.add(dt)
                        product.save()
            except TypeError:
                raise serializers.ValidationError({"detail":"please enter the list"})
        
        if validated_data.get('category'):
            for cate in validated_data['category']:
                try:
                    c = Category.objects.get(id=int(cate),agency=agency)
                    product.category.add(c)
                    product.save()
                except ValueError:
                    raise serializers.ValidationError({"category":"category id must be a number"})
                except Exception:
                    raise serializers.ValidationError({"category":"can't find this category"})
                
        if validated_data.get('attachment'):
            try:
                for att in validated_data['attachment']:
                    if att['url'] and detail['type'] in TYPES_ATTACHMENT:
                        attachment = Attachment.objects.create(title=att['url'],
                                                content=att['type'])
                        product.attachment.add(attachment)
                        product.save()
            except TypeError:
                raise serializers.ValidationError({"attachment":"please enter the list"})
        agency.product.add(product)
        result = {
            'id':product.id,
            'name':product.name,
            'display_image':product.display_image,
            'category':[cate.name for cate in product.category.all()],
            'type':[ty.name for ty in product.type.all()],
            'brand_origin':validated_data['brand_origin'],
            'brand_origin_brand':validated_data['brand_origin_brand'],
            'brand_name':validated_data['brand_name'],
            'detail':[{'title':d.title,'content':d.content} for d in product.detail.all()],
            'quantity':validated_data['quantity'],
            'price':validated_data['price'],
            'attachment':[{'url':a.url,'type':a.type} for a in product.attachment.all()]
        }

        return result
    

class ProductUpdateSerializer(serializers.Serializer):
    display_image = serializers.CharField(max_length=100,required=False)
    price = serializers.FloatField(required=False)
    price_end_datetime = serializers.DateTimeField(required=False)
    quantity = serializers.IntegerField(required=False)
    quantity_note = serializers.CharField(max_length=300,required=False)
    category = serializers.ListField(write_only=True,required=False)
    
    def update(self,instance,validated_data):
        agency = self.context.get('request').user.user.agency
        instance.display_image = validated_data.get('display_image')
        #Update category
        instance.category.clear()
        for cate in validated_data['category']:
            try:
                c = Category.objects.get(id=int(cate),agency=agency)
                instance.category.add(c)
                instance.save()
            except ValueError:
                raise serializers.ValidationError({"category":"category id must be a number"})
            except Exception:
                raise serializers.ValidationError({"category":"can't find this category"})
        #Add quantity
        if validated_data.get('quantity'):
            note = validated_data.get('quantity_note')  
            if not note:
                old_quantity = Quantity.objects.filter(product = instance).last()
                print(old_quantity)
                if old_quantity < validated_data.get('quantity'):
                    note = "Add "+str(validated_data.get('quantity')-old_quantity)+" items"
                if old_quantity > validated_data.get('quantity'):
                    note = "Sub "+str(validated_data.get('quantity')-old_quantity)+" items"
                                                       
            new_quantity = Quantity.objects.create(quantity=validated_data.get('quantity'),
                                                   note=note,)
            instance.quantity.add(new_quantity)
            instance.save()
        #Add price
        if validated_data.get('price'):
            price_end_datetime=None
            if validated_data.get('price_end_datetime'):
                price_end_datetime = validated_data.get('price_end_datetime')
            new_price = Price.objects.create(price=validated_data.get('price'),
                                             product=instance)
            if price_end_datetime:
                new_price.end_datetime = price_end_datetime
                new_price.save()
            instance.price.add(new_price)
            instance.save()
            
        return instance