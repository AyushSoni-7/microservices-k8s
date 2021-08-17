from flask_restful import Resource, reqparse
from models.category import Category


class Categories(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('id',
                        type=int,
                        required=False,
                        store_missing=False,
                        help="Post request an id."
                        )
    parser.add_argument('name',
                        type=str,
                        required=True,
                        help="Name of the category"
                        )
    parser.add_argument('description',
                        type=str,
                        required=True,
                        help="Description of the category"
                        )
    parser.add_argument('img_src',
                        type=str,
                        required=True,
                        help="Source URL of the category image"
                        )

    def get(self):
        return {'categories': Category.get_all()}, 200

    def post(self):
        data = self.parser.parse_args()
        category = Category(**data)
        try:
            category.save()
        except Exception:
            return {"message": "An error occurred"}, 500
        return category.json(), 201

    def put(self):
        data = self.parser.parse_args()
        category = Category.get(data['id'])
        if category:
            category.name = data['name']
            category.description = data['description']
            category.img_src = data['img_src']
        else:
            del data['id']
            category = Category(**data)
        try:
            category.save()
        except Exception:
            return {"message": "An error occurred"}, 500
        return category.json(), 201
