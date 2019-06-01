# Generated by Django 2.2.1 on 2019-05-31 17:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('TiposPlantas', '0001_initial'),
        ('GestionUsuarios', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Plantas',
            fields=[
                ('plant_ip', models.GenericIPAddressField(primary_key=True, serialize=False)),
                ('plant_name', models.CharField(max_length=20)),
                ('User', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='GestionUsuarios.Usuario')),
                ('plant_type', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='TiposPlantas.TipoPlanta')),
            ],
        ),
    ]
