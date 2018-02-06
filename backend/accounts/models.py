from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    username = models.SlugField(max_length=150, unique=True)