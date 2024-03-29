# Generated by Django 4.0.6 on 2022-10-22 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_alter_visit_unique_together'),
        ('voucher', '0009_alter_type_condition_alter_type_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='voucher',
            name='customer',
            field=models.ManyToManyField(blank=True, related_name='voucher', through='voucher.VoucherCustomer', to='accounts.customer'),
        ),
    ]
