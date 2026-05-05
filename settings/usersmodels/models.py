from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser
from django.db import models

class Role(models.TextChoices):
    ADMIN    = 'admin',    'Admin'
    MANAGER  = 'manager',  'Manager'
    STAFF    = 'staff',    'Staff'
    CUSTOMER = 'customer', 'Customer'

class User(AbstractUser):
    role = models.CharField(
        max_length=20,
        choices=Role.choices,
        default=Role.CUSTOMER
    )
    phone = models.CharField(max_length=20, blank=True)
    # avatar = models.ImageField(upload_to='avatars/', blank=True)

    def is_admin(self):
        return self.role == Role.ADMIN

    def is_manager(self):
        return self.role in [Role.ADMIN, Role.MANAGER]

    def __str__(self):
        return f"{self.username} ({self.role})"

# class TimeStamp():
#     created_at=
#     updated_at=
#     is_user=

class Menu_items():
    itemname=models.CharField(max_length=225,blank=False,null=False)
    image=models.ImageField(upload_to='image/',null=False,blank=False)

class Item_details(Menu_items):
    itemname=
    image=
    restarentname=
    cost=
    rating=
    time_to_reach=
    description=


from django.core.validators import MinValueValidator, MaxValueValidator


class BaseModel(models.Model):
    """
    Common fields for all models (production practice)
    """
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True


class Restaurant(BaseModel):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255, blank=True, null=True)
    phonenumber=


    def __str__(self):
        return self.name


class MenuItem(BaseModel):
    item_name = models.CharField(max_length=225)
    image = models.ImageField(upload_to='menu_items/')

    def __str__(self):
        return self.item_name


class ItemDetail(BaseModel):
    menu_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE, related_name="details")
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="items")

    itemcost = models.DecimalField(max_digits=8, decimal_places=2)
    rating = models.FloatField(
        validators=[MinValueValidator(0), MaxValueValidator(5)],
        default=0
    )
    time_to_reach = models.PositiveIntegerField(help_text="Time in minutes")

    description = models.TextField(blank=True, null=True)

    class Meta:
        indexes = [
            models.Index(fields=['restaurant']),
            models.Index(fields=['rating']),
        ]
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.menu_item.item_name} - {self.restaurant.name}"