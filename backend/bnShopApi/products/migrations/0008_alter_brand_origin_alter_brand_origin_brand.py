# Generated by Django 4.0.6 on 2022-09-19 02:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_alter_brand_unique_together'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='origin',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='brand',
            name='origin_brand',
            field=models.CharField(max_length=100),
        ),
    ]
