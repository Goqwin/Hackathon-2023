from django.db import models

# Create your models here.

class User(models.Model):
    Username = models.CharField(max_length=50)
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50) 
    Email = models.CharField(max_length=50)

class Transaction(models.Model):
    User = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    Amoutn = models.IntegerField()
    Cryptocurrency - models.charField(max_length=50)

class Friends(models.Model):
    User = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    Email = models.CharField(max_length=50)
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50)