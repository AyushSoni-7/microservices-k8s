from flask_restful import Resource
from models.product_category_map import ProductCategoryMap


class Products(Resource):
    def get(self, _id):
        return {
          'products': ProductCategoryMap.get_products(int(_id))
          }, 200

    def delete(self, _id):
        pcMap = ProductCategoryMap.get(_id)
        if pcMap:
            pcMap.delete()
            return {'message': 'Map Deleted'}, 202
        return {'message': 'Mapping Not Found'}, 404
