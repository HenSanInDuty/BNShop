# Generated by Django 4.0.6 on 2022-10-25 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0006_alter_orderdetail_status'),
        ('voucher', '0011_voucher_subcontent'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='voucher',
            name='order_detail',
        ),
        migrations.AddField(
            model_name='voucher',
            name='order_detail',
            field=models.ManyToManyField(blank=True, related_name='voucher', to='orders.orderdetail'),
        ),
    ]
