from flask_restful import Resource, reqparse
from models.product_category_map import ProductCategoryMap as pcModel


class ProductCategoryMap(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('category_id',
                        type=int,
                        required=True,
                        help="Category id."
                        )

    parser.add_argument('product_id',
                        type=str,
                        required=False,
                        help="Product id."
                        )

    def post(self):
        data = self.parser.parse_args()
        pcMap = pcModel(**data)
        try:
            pcMap.save()
        except Exception:
            return {"message": "An error occurred in post map"}, 500
        return pcMap.json(), 201

    def delete(self):
        data = self.parser.parse_args()
        pcMap = pcModel.get(data['product_id'])
        if not pcMap:
            return "Data not found", 404
        try:
            pcMap.delete()
            return {'message': 'Category Product Map Deleted'}
        except Exception:
            return {"message": "Data can not be delete"}, 500
