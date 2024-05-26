from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from image import send_image

app = Flask(__name__)
#cors = CORS(app, origins='*')
CORS(app)

@app.route("/api/users", methods=['GET'])
def users():
    return jsonify(
        {
            "users": [
                'hadrian',
                'joe',
                'mark'
            ]
        }
    )

@app.route("/data", methods=['POST'])
def handle_data():
    data = request.get_json() # Access data sent from React
    print(f"Received data from React, in flask: {data}") # log
    #process ie database, normally
    send_image()
    return jsonify({'message': 'Data received successfully!'})

@app.route("/login", methods=['POST'])
def handle_login_data():
    data = request.get_json() # Access data sent from React
    print(f"Received data from React, in flask: {data}") # log
    #process ie database, normally
    return jsonify({'message': 'Data received successfully!'})

if __name__ == "__main__":
    #app.run(debug=True, port=8080)
    app.run(host='192.168.0.47', port=80)