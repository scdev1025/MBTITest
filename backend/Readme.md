
## Run it locally

0. At this stage of the project lifecycle, there are no secret access keys or passwords that we
    care to protect, and therefore there are no config files. The server should just run as-is with a sqlite
    database.
1. Install Python 3.7
2. `pip install -r requirements.txt`
3. `python manage.py migrate`
4. `python manage.py runserver`

## Usage
Visit `/api/v1/` to see the available apis.

Here's api url for some apis
