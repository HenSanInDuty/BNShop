# Generated by Django 4.0.6 on 2022-09-18 10:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0003_alter_customer_birthday'),
    ]

    operations = [
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('condition', models.CharField(max_length=100)),
                ('type', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Voucher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=40)),
                ('qty', models.IntegerField()),
                ('title', models.CharField(max_length=100)),
                ('content', models.CharField(blank=True, max_length=100, null=True)),
                ('from_price', models.FloatField(blank=True, null=True)),
                ('from_product', models.IntegerField(blank=True, null=True)),
                ('reduce_price', models.FloatField(blank=True, null=True)),
                ('reduce_persent', models.FloatField(blank=True, null=True)),
                ('end_date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='VoucherCustomer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_used', models.BooleanField(default=False)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer_voucher', to='accounts.customer')),
                ('voucher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='voucher_customer', to='voucher.voucher')),
            ],
        ),
        migrations.AddField(
            model_name='voucher',
            name='customer',
            field=models.ManyToManyField(related_name='voucher', through='voucher.VoucherCustomer', to='accounts.customer'),
        ),
    ]
