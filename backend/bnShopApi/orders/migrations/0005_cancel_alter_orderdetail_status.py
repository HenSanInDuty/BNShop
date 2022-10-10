# Generated by Django 4.0.6 on 2022-10-09 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_alter_orderdetail_address_alter_orderdetail_payment_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cancel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reason', models.CharField(max_length=100)),
                ('detail', models.TextField()),
            ],
        ),
        migrations.AlterField(
            model_name='orderdetail',
            name='status',
            field=models.CharField(choices=[(1, 'Waiting for confirm'), (2, 'Agency confirmed'), (3, 'Delivering'), (4, 'Cancel'), (5, 'Received')], max_length=100),
        ),
    ]