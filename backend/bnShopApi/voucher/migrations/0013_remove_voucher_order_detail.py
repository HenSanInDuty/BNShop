# Generated by Django 4.0.6 on 2022-10-25 15:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('voucher', '0012_remove_voucher_order_detail_voucher_order_detail'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='voucher',
            name='order_detail',
        ),
    ]