from django.shortcuts import render

# Create your views here.

# views.py  — Web (renders HTML)
from django.contrib.auth.decorators import login_required
from usersmodels.decorators import role_required
from django.shortcuts import render
from .models import Product

@login_required
def dashboard(request):
    return render(request, 'core/dashboard.html', {'user': request.user})

@login_required
@role_required('admin', 'manager')
def product_list(request):
    products = Product.objects.all()
    return render(request, 'core/products.html', {'products': products})