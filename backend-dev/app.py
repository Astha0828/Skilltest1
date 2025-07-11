from flask import Flask
app = Flask(__name__)

@app.route('/health')
def health():
    return "Backend Dev is Healthy", 200

@app.route('/')
def hello():
    return "Hello from Dev Backend!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)