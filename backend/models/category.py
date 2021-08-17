from db import db


class Category(db.Model):
    __tablename__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(), nullable=False)
    img_src = db.Column(db.String())
    mapping = db.relationship(
        'ProductCategoryMap', backref='category', lazy=True
        )

    def __init__(self, name: str, description: str, img_src: str) -> None:
        self.name = name
        self.description = description
        self.img_src = img_src

    def json(self) -> dict:
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'img_src': self.img_src
        }

    @staticmethod
    def get_all() -> list:
        data = [
            category.json() for category in db.session.query(Category).all()
        ]
        return data

    @classmethod
    def get(cls, _id) -> dict:
        return db.session.query(Category).filter_by(id=_id).first()

    def save(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete(self) -> None:
        db.session.delete(self)
        db.session.commit()
