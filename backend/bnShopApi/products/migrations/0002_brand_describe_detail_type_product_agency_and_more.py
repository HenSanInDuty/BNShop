# Generated by Django 4.0.6 on 2022-09-18 21:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_alter_customer_birthday'),
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('origin', models.CharField(max_length=100)),
                ('origin_brand', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Describe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Detail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('content', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='agency',
            field=models.ManyToManyField(related_name='product', to='accounts.agency'),
        ),
        migrations.AddField(
            model_name='product',
            name='customer_bought',
            field=models.ManyToManyField(blank=True, related_name='bought_product', to='accounts.customer'),
        ),
        migrations.AddField(
            model_name='product',
            name='customer_favorite',
            field=models.ManyToManyField(blank=True, related_name='favorite_product', to='accounts.customer'),
        ),
        migrations.CreateModel(
            name='Quantity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.CharField(max_length=100)),
                ('note', models.CharField(max_length=100)),
                ('from_date', models.DateTimeField(auto_now_add=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='quantity', to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='Price',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.FloatField()),
                ('from_datetime', models.DateTimeField(auto_now_add=True)),
                ('end_datetime', models.DateTimeField(blank=True, null=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='price', to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_url', models.CharField(max_length=100)),
                ('type', models.IntegerField(blank=True, default=2)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='image', to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('agency', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='agency', to='accounts.agency')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='brand',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='product', to='products.brand'),
        ),
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ManyToManyField(related_name='product', to='products.category'),
        ),
        migrations.AddField(
            model_name='product',
            name='describe',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.describe'),
        ),
        migrations.AddField(
            model_name='product',
            name='detail',
            field=models.ManyToManyField(related_name='product', to='products.detail'),
        ),
        migrations.AddField(
            model_name='product',
            name='type',
            field=models.ManyToManyField(related_name='product', to='products.type'),
        ),
    ]
