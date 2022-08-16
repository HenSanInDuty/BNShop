# Generated by Django 4.0.6 on 2022-08-16 13:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='AgencyProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dl_name', models.CharField(max_length=60)),
                ('dl_avatar', models.CharField(max_length=100)),
                ('dl_email', models.EmailField(max_length=254)),
                ('dl_sdt', models.CharField(max_length=11)),
                ('dl_cmnd', models.CharField(max_length=11)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
