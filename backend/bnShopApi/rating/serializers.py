from rest_framework import serializers
from .models import Rate, Reply, Image
from products.models import Product
class RateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rate
        fields = "__all__"

class CreateRateSerializer(serializers.Serializer):
    product = serializers.IntegerField()
    title = serializers.CharField(max_length=100)
    content = serializers.CharField(max_length=30000)
    star = serializers.IntegerField()
    is_approved = serializers.BooleanField(default=False)
    image = serializers.ListField(required=False)

    def create(self, validated_data):
        customer = self.context['customer']
        product = Product.objects.filter(id = self.context['product']).first()
        products = customer.bought_product.filter(id=product.id)
        if not products.exists():
            raise serializers.ValidationError({"detail":"You don't have rate permission for product which you didn't buy"})
        rate = Rate.objects.create(title=validated_data['title'],
                                content=validated_data['content'],
                                star=validated_data['star'],
                                product=product,
                                customer=customer)
        images = []
        for i in validated_data['image']:
            instance = Image.objects.create(image_url=i,
                                rate=rate)
            images.append(instance)
        return {
            'product':product.id,
            'title':rate.title,
            "content":rate.content,
            "star":rate.star,
            "is_approved":False,
            "image":[{'url':im.image_url }for im in images] 
        }

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = "__all__"