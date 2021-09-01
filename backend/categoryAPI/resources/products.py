from flask_restful import Resource
from models.product_category_map import ProductCategoryMap
import time


class Products(Resource):
    def get(self, _id):
        time.sleep(10)
        try:
            data = ProductCategoryMap.get_products(int(_id))
        except Exception:
            return {"message": "failed retriving data"}, 500
        if not data:
            return {'products': data}, 404
        return {
          'products': data
          }, 200

    def delete(self, _id):
        pcMap = ProductCategoryMap.get(_id)
        if pcMap:
            pcMap.delete()
            return {'message': 'Map Deleted'}, 202
        return {'message': 'Mapping Not Found'}, 404
