from flask import Flask, jsonify
from flask_cors import CORS
from backend import get_top_apps_data

app = Flask(__name__)
CORS(app, origins='http://localhost:5173', allow_headers=['Content-Type'])

@app.route('/')
def top_apps():
    data = get_top_apps_data()  # Call your function to get the top apps data
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
