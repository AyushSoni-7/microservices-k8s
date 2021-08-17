from flask_restful import Resource, reqparse
from models.product import Product
from bson.objectid import ObjectId
import json


class Products(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('name',
                        type=str,
                        required=True,
                        help="Name of the product"
                        )
    parser.add_argument('description',
                        type=str,
                        required=True,
                        help="Description of the product"
                        )
    parser.add_argument('img_src',
                        type=str,
                        required=True,
                        help="Source URL of the product image"
                        )
    parser.add_argument('price',
                        type=float,
                        required=True,
                        help="Price of the product"
                        )
    parser.add_argument('quantity',
                        type=float,
                        required=True,
                        help="Quantity of the product"
                        )
    parser.add_argument('benefits',
                        type=str,
                        help="Benefits of product"
                        )
    parser.add_argument('harm',
                        type=str,
                        help="Harm of product"
                        )

    # Used as category id
    def get(self, _id):
        values = Product.getProducts(int(_id))
        key = ('id', 'name', 'description', 'img_src')
        retVal = list(map(lambda value:  dict(tuple(zip(key, value))), values))
        for data in retVal:
            data['id'] = str(data['id'])
        return {
            'products': retVal
            }

    # Used as category id
    def post(self, _id):
        data = self.parser.parse_args()
        product = Product(**data)
        try:
            product.addProduct(int(_id))
        except Exception as e:
            raise e
        return product.json(), 201

    # Used as product id
    def delete(self, _id):
        product = Product.getProduct(_id)
        if product:
            product.deleteProduct()
            return {'message': 'Product Deleted'}
        return {'message': 'Product Not Found'}, 404


class EditProduct(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('id',
                        type=str,
                        required=True,
                        help="ID of the product"
                        )
    parser.add_argument('name',
                        type=str,
                        required=True,
                        help="Name of the product"
                        )
    parser.add_argument('description',
                        type=str,
                        required=True,
                        help="Description of the product"
                        )
    parser.add_argument('img_src',
                        type=str,
                        required=True,
                        help="Source URL of the product image"
                        )
    parser.add_argument('price',
                        type=float,
                        required=True,
                        help="Price of the product"
                        )
    parser.add_argument('quantity',
                        type=float,
                        required=True,
                        help="Quantity of the product"
                        )
    parser.add_argument('benefits',
                        type=str,
                        help="Benefits of product"
                        )
    parser.add_argument('harm',
                        type=str,
                        help="Harm of product"
                        )

    def put(self):
        data = self.parser.parse_args()
        data['id'] = ObjectId(data['id'])
        product = Product(**data)
        product.updateProduct()
        return product.json()


class GetProduct(Resource):
    def get(self, product_id: int):
        product = Product.getProduct(product_id)
        retVal = json.loads(product.json())
        retVal['id'] = str(product['id'])
        del retVal['_id']
        return retVal, 200
