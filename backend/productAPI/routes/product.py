from flask import Blueprint, request, json
from flask.json import jsonify
from data.data import ProductInfoData, ProductData


product_blueprint = Blueprint('product', __name__)


@product_blueprint.route('/<category_id>', methods=["GET"])
def getProducts(category_id):
    retData = [d for d in ProductData if d['category_id'] == int(category_id)]
    return jsonify({'products': retData}), 200


@product_blueprint.route('/product/<product_id>', methods=["GET"])
def getProduct(product_id):
    retval = [
        data for data in ProductInfoData if data['id'] == int(product_id)
        ]
    return jsonify(retval[0]), 200


@product_blueprint.route('/<category_id>', methods=["POST"])
def addProduct(category_id):
    data = request.get_json()
    return data, 200


@product_blueprint.route('/', methods=["PUT"])
def updateProduct():
    data = request.get_json()
    for d in ProductInfoData:
        if d['id'] == data['id']:
            d.update(data)
    return json.dumps(
        {'success': True}), 200, {'ContentType': 'application/json'}


@product_blueprint.route('/<product_id>', methods=["DELETE"])
def deleteProduct(product_id):
    global ProductInfoData
    print(len(ProductInfoData))
    ProductInfoData = [
        d for d in ProductInfoData if d.get('id') != int(product_id)
        ]
    print(len(ProductInfoData))
    return json.dumps(
        {'success': True}), 200, {'ContentType': 'application/json'}
