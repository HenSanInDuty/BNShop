# Generated by Django 4.0.6 on 2022-10-18 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('voucher', '0007_alter_voucher_end_date_alter_voucher_qty'),
    ]

    operations = [
        migrations.AddField(
            model_name='voucher',
            name='scope',
            field=models.IntegerField(choices=[(1, 'All'), (2, 'Special')], default=1),
        ),
    ]