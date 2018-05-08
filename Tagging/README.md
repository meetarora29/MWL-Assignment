Make sure you have virtual environment installed.

Run the following commands from the 'Tagging' directory:

	virtualenv env
	source env/bin/activate
	pip install -r requirements.txt

	python3 manage.py migrate
	python3 manage.py runserver

Now, the app is available at http://127.0.0.1:8000/upload/

