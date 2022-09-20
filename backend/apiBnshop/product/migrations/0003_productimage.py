# Generated by Django 4.0.6 on 2022-09-08 04:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_rename_product_detail_productdetail_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hinh_url', models.CharField(max_length=1000)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='image', to='product.product')),
            ],
        ),
    ]