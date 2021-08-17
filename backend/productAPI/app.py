from flask import Flask, jsonify
from flask_cors import CORS
from flask_restful import Api
from db import db
from resources import ROUTES_MAP
from config.config import DevelopmentConfig
# from data.insert_metadata import insert_metadata
import os
from models.product import Product


def create_app():
    flask_app = Flask(__name__)
    cors = CORS(flask_app)
    flask_app.config['CORS_HEADERS'] = 'Content-Type'
    api = Api(flask_app)
    flask_app.config.from_object(DevelopmentConfig)
    db.init_app(flask_app)
    # flask_app.config['MONGODB_SETTINGS'] = {
    #     'db': 'productDB',
    #     'host': 'localhost',
    #     'port': 27017,
    #     'username': 'root',
    #     'password': 'password'
    # }
    flask_app.config["MONGODB_SETTINGS"] = {
        'DB': "productDB",
        "host": "mongodb://localhost:27017/productDB"
        }
    for route in ROUTES_MAP:
        api.add_resource(route["resource"], route["route"])
    return flask_app


if __name__ == "__main__":
    port = os.environ.get("port", 5001)
    app = create_app()
    # @app.before_first_request
    # def create_tables():
    #     db.create_all()
    #     # insert_metadata(db)
    app.run(host="0.0.0.0", port=port)
