from flask import Flask

app = Flask(__name__)

@app.before_first_request
def init():
    print("Primera petición al servidor...")

@app.route("/")
def home():
    return "¡Hola mundo!"

if __name__ == "__main__":
    app.run(debug=True)
