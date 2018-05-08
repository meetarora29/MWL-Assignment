import os
import re

from django.core.files.storage import FileSystemStorage
from django.shortcuts import render
import requests


# Create your views here.
from requests.auth import HTTPBasicAuth


def upload(request):

    confidence = 28

    travel_tags = ['mountain', 'beach', 'wildlife', 'architecture', 'flowers', 'nature', 'sunset', 'hike', 'lake', 'temple', 'sculpture', 'landscape', 'sea', 'boat', 'river', 'forest', 'waterfall', 'snow']

    api_key = 'acc_d7a831d72e017fb'
    api_secret = 'cd85c9aa85b7958acac1f6f07c456510'
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    auth = HTTPBasicAuth(api_key, api_secret)

    if request.method == 'POST' and request.FILES['filetoUpload']:
        filetoUpload = request.FILES['filetoUpload']

        # Check file type
        print(filetoUpload.content_type)
        if not re.match(r'image/*', filetoUpload.content_type):
            return render(request, '../templates/upload.html', {
                'tags': ['File Type Error']
            })

        fs = FileSystemStorage()
        filename = fs.save(filetoUpload.name, filetoUpload)
        uploaded_file = fs.url(filename)

        image_path = os.path.join(BASE_DIR, 'media', filename)

        response = requests.post('https://api.imagga.com/v1/content',
                                 auth=auth,
                                 files={'image': open(image_path, 'rb')})
        print(response.json())

        if response.json()['status'] == "success":
            image = response.json()['uploaded'][0]['id']
            verbose = False
            language = 'en'

            tagging_query = {
                'content': image,
                'verbose': verbose,
                'language': language,
            }

            tagging_response = requests.get(
                'https://api.imagga.com/v1/tagging',
                auth=auth,
                params=tagging_query
            )

            print(tagging_response.json())
            tags = tagging_response.json()['results'][0]['tags']

            result = []
            for tag in tags:
                print(tag['tag'])
                if tag['confidence'] > confidence and tag['tag'] in travel_tags:
                    result+=[tag['tag']]

            if len(result)==0:
                result+=['Could not identify Travel related tags']

            return render(request, '../templates/upload.html', {
                'uploaded_file': uploaded_file,
                'tags': result
            })
    return render(request, '../templates/upload.html')
