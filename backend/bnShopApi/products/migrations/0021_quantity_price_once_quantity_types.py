# Generated by Django 4.0.6 on 2022-11-21 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0020_alter_attachment_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='quantity',
            name='price_once',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='quantity',
            name='types',
            field=models.IntegerField(null=True),
        ),
    ]
