# Generated by Django 4.0.6 on 2022-10-18 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('voucher', '0006_alter_type_condition_alter_type_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='voucher',
            name='end_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='voucher',
            name='qty',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]