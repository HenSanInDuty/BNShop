# Generated by Django 4.0.6 on 2022-10-23 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('voucher', '0010_alter_voucher_customer'),
    ]

    operations = [
        migrations.AddField(
            model_name='voucher',
            name='subcontent',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
