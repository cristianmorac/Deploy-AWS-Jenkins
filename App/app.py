from flask import Flask
from flask_wtf import CSRFProtect

app = Flask(__name__)
csrf = CSRFProtect(app)

@app.before_first_request
def init():
    print("Primera petición al servidor...")

@app.route("/")
def home():
    return "¡Hola mundo!"

if __name__ == "__main__":
    app.run()
