from django.shortcuts import render

# Create your views here.

# capi_views.py  — REST API (returns JSON)
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from usersmodels.permissions import IsManagerOrAbove
from .models import Product
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsManagerOrAbove()]
        return [IsAuthenticated()]