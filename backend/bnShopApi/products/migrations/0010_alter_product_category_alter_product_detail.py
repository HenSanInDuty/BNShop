# Generated by Django 4.0.6 on 2022-09-20 04:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0009_brand_name_alter_type_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ManyToManyField(blank=True, related_name='product', to='products.category'),
        ),
        migrations.AlterField(
            model_name='product',
            name='detail',
            field=models.ManyToManyField(blank=True, related_name='product', to='products.detail'),
        ),
    ]