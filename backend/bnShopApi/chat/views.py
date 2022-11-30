from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.renderers import TemplateHTMLRenderer
from products.models import Product

def room(request, room_name):
        return render(request, "chat/room.html",{"room_name": room_name})