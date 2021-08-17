from flask_restful import Resource
from models.category import Category as cModel


class Category(Resource):

    def get(self, category_id: int):
        category = cModel.get(category_id)
        if category:
            return category.json(), 200
        return {'message': 'Category Not Found'}, 404

    def delete(self, category_id: int):
        category = cModel.get(category_id)
        if category:
            category.delete()
            return {'message': 'Category Deleted'}
        return {'message': 'Category Not Found'}, 404
