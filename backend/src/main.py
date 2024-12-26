# Flask App

from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<a href='/tierlistmaker'>Hello, World!</p>"

@app.route("/tierlistmaker")
def tierlistmaker():
    return "<h1>Tierlistmaker</h1>"