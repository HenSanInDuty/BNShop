# Generated by Django 4.0.6 on 2022-09-09 10:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0006_productimage_is_default'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productimage',
            name='is_default',
        ),
    ]