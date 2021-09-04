from flask import Flask, request
from flask_cors import CORS

from time import sleep
from random import random
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def cleanstring():
    if request.method == 'GET':
        return {"result": ""}
    else:
        content = request.json
        if not content or "source" not in content:
            return {"err": "Missing source body parameter"}, 400
        sleeping_time = random() * 5
        print("Taking", sleeping_time, "s to solve...")
        sleep(sleeping_time)
        return {"result": ""}

