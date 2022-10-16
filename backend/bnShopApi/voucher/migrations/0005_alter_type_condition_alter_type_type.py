# Generated by Django 4.0.6 on 2022-10-16 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('voucher', '0004_alter_type_condition_alter_type_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='type',
            name='condition',
            field=models.CharField(choices=[(1, 'Price'), (2, 'Number')], default=1, max_length=100),
        ),
        migrations.AlterField(
            model_name='type',
            name='type',
            field=models.CharField(choices=[(1, 'Reduce Price'), (2, 'Reduct Persent')], default=1, max_length=100),
        ),
    ]
