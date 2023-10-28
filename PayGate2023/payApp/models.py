from django.db import models

# Create your models here.

class User(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50) 
    email = models.CharField(max_length=50)

class Transaction(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    amount = models.IntegerField()
    cryptocurrency - models.charField(max_length=50)

class Friends(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    email = models.CharField(max_length=50)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)

