# Generated by Django 4.0.6 on 2022-09-16 03:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('address', '0002_address_is_approved'),
    ]

    operations = [
        migrations.AddField(
            model_name='address',
            name='is_default',
            field=models.BooleanField(blank=True, default=False),
        ),
    ]
