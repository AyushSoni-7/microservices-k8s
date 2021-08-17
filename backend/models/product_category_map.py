from db import db


class ProductCategoryMap(db.Model):
    __tablename__ = 'product_category_map'
    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    product_id = db.Column(db.String(), unique=True)

    def __init__(self, category_id: int, product_id: str):
        self.category_id = category_id
        self.product_id = product_id

    def json(self) -> dict:
        return {
            'category_id': self.category_id,
            'product_id': self.product_id
        }

    @classmethod
    def get_products(cls, category_id):
        data = [
            pcMap.json().get(
                'product_id'
                ) for pcMap in db.session.query(ProductCategoryMap).filter_by(
                        category_id=category_id
                        ).all()
        ]
        return data

    @classmethod
    def get(cls, product_id) -> dict:
        data = db.session.query(ProductCategoryMap).filter_by(
            product_id=product_id).first()
        return data

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
