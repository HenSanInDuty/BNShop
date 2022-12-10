from django.db import models

from accounts.models import Users

# Create your models here.
class ChatRoom(models.Model):
    user = models.ManyToManyField(Users,related_name='chat_room')

class ChatLine(models.Model):
    chat_room = models.ForeignKey(ChatRoom,on_delete=models.CASCADE,related_name='chat_line')
    user = models.ForeignKey(Users,on_delete=models.CASCADE,related_name='chat_line')
    content = models.TextField()