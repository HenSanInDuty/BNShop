# Generated by Django 4.0.6 on 2022-09-16 02:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('address', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='address',
            name='is_approved',
            field=models.BooleanField(blank=True, default=True),
        ),
    ]
