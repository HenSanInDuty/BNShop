# Generated by Django 4.0.6 on 2022-11-15 23:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0008_statusshippingnote'),
    ]

    operations = [
        migrations.AddField(
            model_name='statusshippingnote',
            name='date_note',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
