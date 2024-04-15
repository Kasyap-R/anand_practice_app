from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Persistent Server State
girth_lengths = []

@app.route('/hello', methods=['GET'])
def hello_world():
    return "HEllo world"

@app.route('/submit', methods=["POST"])
def add_length_data():
    global girth_lengths
    data = request.get_json()
    height = data.get('height')
    girth_lengths.append(height)
    print(girth_lengths)
    return jsonify({"status": "success", "height": height}), 200

@app.route('/delete', methods=["DELETE"])
def delete_data():
    global girth_lengths
    girth_lengths = []
    print(girth_lengths)
    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    app.run(debug=True)