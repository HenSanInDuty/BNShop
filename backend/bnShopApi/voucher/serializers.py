from dataclasses import field
from django.db.utils import IntegrityError
from pkg_resources import require
from rest_framework import serializers

from accounts.models import Account
from .models import Type, Voucher


class CreateVoucherSerializer(serializers.Serializer):
    SCOPE_VOUCHER = ((0, 'All'), (1, 'Special'))

    id = serializers.IntegerField(required=False)
    type = serializers.IntegerField()
    customer = serializers.ListField(required=False)
    code = serializers.CharField(max_length=40, required=False)
    qty = serializers.IntegerField(required=False)
    subcontent = serializers.CharField(max_length=100, required=False)
    from_price = serializers.FloatField(required=False)
    from_product = serializers.IntegerField(required=False)
    reduce_price = serializers.FloatField(required=False)
    reduce_persent = serializers.FloatField(required=False)
    end_date = serializers.DateTimeField(required=False)
    scope = serializers.ChoiceField(default=0, choices=SCOPE_VOUCHER)
    
    def validate(self, attrs):
        content = super().validate(attrs)
        if not Type.objects.filter(id = content['type']):
            raise serializers.ValidationError({"Type":"Type not found"})
        else:
            content['type'] = Type.objects.filter(id = content['type']).first()
        if content.get('code'):
            print(content['code'])
            if Voucher.objects.filter(code=content['code']):
                raise serializers.ValidationError({"Code":"Code must unique"})
        return content
    
    def create(self, validated_data):
        agency = self.context['agency']
        type_vou = validated_data['type'].type
        condition = validated_data['type'].condition
        #Pop customer in validated_data and push to customer
        customer = validated_data.pop('customer')
        #Init content and title 
        values_return = ['id','type','code','qty','subcontent','scope','content','title']
        if condition == 0:
            content = "Order from "+str(validated_data['from_price'])+" VND"
            values_return.append('from_price')
        else:
            content = "Order from"+str(validated_data['from_product'])+" products"
            values_return.append('from_product')
        
        if type_vou == 0:
            title = "Reduce "+str(validated_data['reduce_price'])+" VND"
            values_return.append('reduce_price')
        else:
            title = "Reduce "+str(validated_data['reduce_percent'])+"%"
            values_return.append('reduce_percent')

        validated_data['content'] = content
        validated_data['title'] = title
        #Get last vouc to create new code
        last_id_vouc = Voucher.objects.last()

        if not validated_data.get('code'):
            validated_data['code'] = str(agency.user.name)[:5].strip() + str(last_id_vouc.id + 1)

        new_voucher = Voucher.objects.create(**validated_data)
        #Add customer to new_voucher
        if validated_data['scope'] != 0:
            if len(customer) > 0:
                for cus in customer:
                    cus_current = Account.objects.filter(id = cus).first().user
                    
                    if cus_current and cus_current.is_customer:
                        new_voucher.customer.add(cus_current.customer)
        
        return_voucher = Voucher.objects.filter(id = new_voucher.id).values(*values_return).first()
        return return_voucher


class VoucherTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Type
        fields = "__all__"