# Generated by Django 4.0.6 on 2022-11-15 23:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0009_account_is_shipper_shipper'),
        ('orders', '0009_statusshippingnote_date_note'),
    ]

    operations = [
        migrations.AddField(
            model_name='statusshippingnote',
            name='shipper',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='status_shipping', to='accounts.shipper'),
            preserve_default=False,
        ),
    ]
