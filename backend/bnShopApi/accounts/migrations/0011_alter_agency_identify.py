# Generated by Django 4.0.6 on 2022-12-09 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0010_alter_account_is_shipper'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agency',
            name='identify',
            field=models.CharField(max_length=12, unique=True),
        ),
    ]