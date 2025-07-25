# Generated by Django 4.2.21 on 2025-06-17 08:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_studentquizattempt_meta'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='language_used_at_home',
            field=models.CharField(blank=True, choices=[('Balochi', 'Balochi'), ('Brahui', 'Brahui'), ('Chitrali', 'Chitrali'), ('Dari/Farsi', 'Dari/Farsi'), ('Hindko', 'Hindko'), ('Kohistani', 'Kohistani'), ('Other', 'Other'), ('Pashto', 'Pashto'), ('Punjabi', 'Punjabi'), ('Saraiki', 'Saraiki'), ('Sindhi', 'Sindhi'), ('Urdu', 'Urdu')], help_text='Language spoken at home', max_length=20, null=True),
        ),
    ]
