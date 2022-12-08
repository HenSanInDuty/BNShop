from django.forms import ValidationError
from pkg_resources import require
from rest_framework import serializers
from rest_framework.fields import CurrentUserDefault

from products.models import Attachment, Brand, Category, Describe, Price, Product, Quantity, Type, Detail

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
    display_image = serializers.CharField(max_length=30000, required=True)
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
                                origin=validated_data['brand_origin'],
                                origin_brand=validated_data['brand_origin_brand']):
            
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
                                           product=product,
                                           types=1,
                                           note="Init",
                                           change_num=validated_data['quantity'],
                                           price_once=validated_data['price'])
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
                    if att['url'] and att['type'] in TYPES_ATTACHMENT:
                        Attachment.objects.create(url=att['url'],
                                                type=att['type'],
                                                product=product)
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
    display_image = serializers.CharField(max_length=30000,required=False)
    price = serializers.FloatField(required=False)
    price_end_datetime = serializers.DateTimeField(required=False)
    category = serializers.ListField(write_only=True,required=False)
    attachment = serializers.JSONField(required=False)
    describe = serializers.CharField(max_length=1000000,required=False)

    def update(self,instance,validated_data):
        TYPES_ATTACHMENT = ('2D','3D','Video')
        agency = self.context.get('request').user.user.agency
        if validated_data.get('display_image') and validated_data.get('display_image').strip() != '':
            instance.display_image = validated_data.get('display_image')
        #Update category
        if validated_data.get('category') and validated_data.get('category').strip() != '':
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
        #Add price
        if validated_data.get('price') and validated_data.get('price')!=None:
            price_end_datetime=None
            if validated_data.get('price_end_datetime'):
                price_end_datetime = validated_data.get('price_end_datetime')
            new_price = Price.objects.create(price=validated_data.get('price'),
                                             product=instance)
            if price_end_datetime:
                new_price.end_datetime = price_end_datetime
                new_price.save()
            instance.price.add(new_price)
        #Update attachment
        if validated_data.get('attachment') and validated_data.get('attachment').strip()!='':
            if instance.attachment:
                instance.attachment.all().delete()
            try:
                for att in validated_data['attachment']:
                    if att['url'] and att['type'] in TYPES_ATTACHMENT:
                        Attachment.objects.create(url=att['url'],
                                                type=att['type'],
                                                product=instance)
            except TypeError:
                raise serializers.ValidationError({"attachment":"please enter the list"})
        
        #Update describe sss
        if validated_data.get('describe') and validated_data.get('describe').strip() != '':
            if instance.describe:
                instance.describe.delete()
            des = Describe.objects.create(
                content = validated_data.get('describe'),
            ) 
            instance.describe = des
        instance.save()

        return instance

class ReportProductSerializer(serializers.Serializer):
    
    TYPE_REPORT=(("1",'Month'),
    ("2",'Quarter'),
    ("3",'Midyear'),
    ("4",'Year'),)

    type = serializers.ChoiceField(choices=TYPE_REPORT)
    detail = serializers.IntegerField(required=False)

class QuantityCreateSerializer(serializers.Serializer):
    TYPES_QUANTITY = (
        (1,"Add goods"),
        (2,"Drop goods"),
    )

    change_num = serializers.IntegerField()
    note = serializers.CharField(max_length=100,required=False)
    types = serializers.ChoiceField(choices=TYPES_QUANTITY)
    price_once = serializers.FloatField()

    def create(self,validated_data):
        product = self.context.get('product')
        quantity_last = Quantity.objects.filter(product = product).last().quantity
        if validated_data['types'] == 1:
            quantity_change = quantity_last + validated_data['change_num']
        else:
            quantity_change = quantity_last - validated_data['change_num']
            if quantity_change < 0:
                raise serializers.ValidationError({"detail":"Quantity of product don't have anymore like that"})

        if validated_data['note'] == None:
            note = self.TYPES_QUANTITY[validated_data['type']-1][1]
        else:
            note = validated_data['note'] 

        quantity = Quantity.objects.create(
            quantity = quantity_change,
            change_num = validated_data['change_num'],
            note = note,
            price_once = validated_data['price_once'],
            types = validated_data['types'],
            product = product
        )
        return quantity

