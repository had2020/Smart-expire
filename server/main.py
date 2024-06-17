from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from image import send_image
from image import ai_response
import os
from werkzeug.utils import secure_filename
import tempfile

app = Flask(__name__)
#cors = CORS(app, origins='*')
CORS(app)

# setting up file upload folder
UPLOAD_FOLDER = 'Uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# check the upload folder exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

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

@app.route("/api/data", methods=['POST', 'GET'])
def handle_data():
    data = request.get_json() # get data sent from React
    print(f"Received data from React, in flask: {data}") # log
    return jsonify({'message': 'Data received successfully!'})

@app.route('/api/image', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        image_save_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(image_save_path)
        
        send_image('/Users/hadrian/Developer/Python projects/Smart-expire/' + image_save_path) # send image to AI

        return jsonify({'message': 'File uploaded successfully', 'filename': filename}), 200
    else:
        return jsonify({'error': 'File type not allowed'}), 400

@app.route("/api/ai_response", methods=['GET'])
def get_ai_response():
    return jsonify({'ai_response': ai_response})

@app.route("/api/login", methods=['POST', 'GET'])
def handle_login_data():
    data = request.get_json() # get data sent from React
    print(f"Received data from React, in flask: {data}") # log
    #process database stuff
    return jsonify({'message': 'Data received successfully!'})

if __name__ == "__main__":
    app.run(debug=True, port=8080) # local-debug only
    #app.run(host='192.168.0.49', port=443) # needs root acess - sudo -i / normal deploy
    #app.run(host='76.167.195.153', port=443) #failed
    #app.run(host='0.0.0.0', port=5000)  # Bind to all interfaces on port 5000
