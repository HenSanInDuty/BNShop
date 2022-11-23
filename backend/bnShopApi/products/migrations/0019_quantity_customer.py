# Generated by Django 4.0.6 on 2022-11-09 14:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_alter_visit_unique_together'),
        ('products', '0018_quantity_change_num'),
    ]

    operations = [
        migrations.AddField(
            model_name='quantity',
            name='customer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='history', to='accounts.customer'),
        ),
    ]
