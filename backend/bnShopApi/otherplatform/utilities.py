from rest_framework.decorators import api_view
from rest_framework.response import Response
from email.message import EmailMessage
import ssl
import smtplib
from .secret import get_info_google_send_mail
# Create your views here.
def send_email(emailReceived:str, subject:str, content:str):
    body = content
    info = get_info_google_send_mail()
    em = EmailMessage()
    em['From'] = info['sender']
    em['To'] = emailReceived
    em['Subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com',465,context=context) as smtp:
        smtp.login(info['sender'],info['password'])
        smtp.send_message(em,info['sender'],emailReceived)