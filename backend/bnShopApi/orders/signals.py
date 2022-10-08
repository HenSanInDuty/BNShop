from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Order
from products.views import get_info_product

@receiver(post_save,sender=Order)
def auto_change_amount(sender,instance,created, **kwargs):
    p = get_info_product(instance.product)
    amount = p.get('last_price').get('price') * instance.qty
    Order.objects.filter(id = instance.id).update(amount=amount)