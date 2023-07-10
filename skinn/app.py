# -*- coding: utf-8 -*-
"""
Created on Sun Oct  3 02:58:19 2021

@author: Acer Asjad
"""
# import the necessary packages



from tensorflow import keras 

from keras.preprocessing.image import img_to_array
from keras.applications import imagenet_utils
import numpy as np
# import flask
from flask import Flask, request, jsonify, make_response

import io
# import base64
# from io import BytesIO
import re
# import cStringIO
# from io import StringIO
# from cStringIO import StringIO
import base64 
from PIL import Image
from keras.applications.resnet import ResNet101
from tensorflow.keras.models import Model
from tensorflow import keras
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout, InputLayer
from tensorflow.keras.models import Sequential
from tensorflow.keras import optimizers


# initialize our Flask application and the Keras model
app = Flask(__name__)
target_names = ['Acne', 'Eczema', 'Healthy', 'Psoriasis']
model = None

def load_model():
    # load the pre-trained Keras model (here we are using a model
    # pre-trained on ImageNet and provided by Keras, but you can
    # substitute in your own networks just as easily)
    global model
    restnet = ResNet101(include_top=False, weights='imagenet', input_shape=(200,200,3))
    output = restnet.layers[-1].output
    output = keras.layers.Flatten()(output)
    restnet = Model(restnet.input, output)
    for layer in restnet.layers:
        layer.trainable = False
    model = Sequential()
    model.add(restnet)
    model.add(Dense(512, activation='relu', input_dim=(200,200,3)))
    #model.add(Dropout(0.35))
    model.add(Dense(512, activation='relu'))
    #model.add(Dropout(0.4))
    model.add(Dense(4, activation='softmax'))
    model.load_weights("final-model.h5")
    model.compile(loss='categorical_crossentropy',
    #              optimizer = 'adam',
                  optimizer=optimizers.RMSprop(lr=2e-5),
                  metrics=['accuracy'])
    


def prepare_image(image, target):
    # if the image mode is not RGB, convert it
    if image.mode != "RGB":
        image = image.convert("RGB")

    # resize the input image and preprocess it
    image = image.resize(target)
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)
    image = imagenet_utils.preprocess_input(image)

    # return the processed image
    return image

    # initialize the data dictionary that will be returned from the
    # view
    # data = {"success": False}

    # # ensure an image was properly uploaded to our endpoint
    # if flask.request.method == "POST":
    #     if flask.request.files.get("image"):
    #         # read the image in PIL format
    #         image = flask.request.files["image"].read()
    #         image = Image.open(io.BytesIO(image))

    #         # preprocess the image and prepare it for classification
    #         image = prepare_image(image, target=(200, 200))

    #         # classify the input image and then initialize the list
    #         # of predictions to return to the client
    #         preds = model.predict(image)
    #         preds = np.argmax(preds)
    #         res = target_names[preds]

    # return the data dictionary as a JSON response
    # return "AAK OKAY"

@app.route("/predict", methods=["POST"])
def predict():
    # io.BytesIO
    request_data = request.get_json()
    # pic = io.StringIO
    # img_string = io.StringIO(base64.b64decode(request_data['body']['img']))
    # img = Image.open(img_string)
    # img.save(pic, img.format, quality=100)
    # pic.seek(0)
    # image = Image.open(pic)
    # python_version = request_data['body']['img']
    # image_data = re.sub('^data:image/.+;base64,', '', request_data['body']['img']).decode('base64')
    # image = Image.open(StringIO(request_data['body']['img']))
    image = Image.open(io.BytesIO(base64.b64decode(request_data['body']['img'])))
    image = prepare_image(image, target=(200, 200))
    preds = model.predict(image)
    preds = np.argmax(preds)
    res = target_names[preds]
    return res
    # print(res)
    # print(python_version)
    # print(request['img'])
    # if request.json['img']
    # initialize the data dictionary that will be returned from the
    # view
    # print(request.json['img'])
    # data = {"success": False}
    # ensure an image was properly uploaded to our endpoint
    # if flask.request.method == "POST":
    #     if flask.request.files.get("image"):
    #         # read the image in PIL format
    #         image = flask.request.files["image"].read()
    #         image = Image.open(io.BytesIO(image))

    #         # preprocess the image and prepare it for classification
    #         image = prepare_image(image, target=(200, 200))

    #         # classify the input image and then initialize the list
    #         # of predictions to return to the client
    #         preds = model.predict(image)
    #         preds = np.argmax(preds)
    #         res = target_names[preds]

    # return the data dictionary as a JSON response
    # res = "Comming Soon"
    # return res

if __name__ == "__main__":
    print(("* Loading Keras model and Flask starting server..."
        "please wait until server has fully started"))
    load_model()
    app.run(host = "192.168.141.243",port=5000,debug=True)