# Generated by Django 4.0.4 on 2022-05-03 17:55

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('strongest_link_app', '0002_location_alter_comments_user_alter_posts_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]