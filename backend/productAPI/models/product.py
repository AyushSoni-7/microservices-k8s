from db import db
import requests
import os
from bson.objectid import ObjectId
from flask import abort


class Product(db.Document):
    id = db.ObjectIdField(default=ObjectId, primary_key=True)
    name = db.StringField(max_length=64, unique=True, required=True)
    description = db.StringField(required=True)
    img_src = db.StringField(required=True)
    price = db.DecimalField(required=True)
    quantity = db.DecimalField(required=True)
    benefits = db.StringField(required=True)
    harm = db.StringField(required=True)
    # def __init__(
    #             self, name: str, description: str,
    #             img_src: str, quantity: float,
    #             benefits: str, harm: str
    #             ) -> None:
    #     super(Product, self).__init__(
    #         name, description, img_src, quantity, benefits, harm
    #         )
    #     self.name = name
    #     self.description = description
    #     self.img_src = img_src
    #     self.quantity = quantity
    #     self.benefits = benefits
    #     self.harm = harm

    def json(self) -> dict:
        return self.to_json()

    @classmethod
    def getProducts(cls, category_id: int) -> list:
        # request to get a list of product id
        URL = os.environ.get('category_url', 'http://127.0.0.1:5000')
        URL += "/products/" + str(category_id)
        try:
            response = requests.get(url=URL)
        except requests.exceptions.HTTPError as e:
            print("Error Occured connecting to category api")
            raise e
        pList = response.json().get('products')
        return cls.objects(id__in=pList).values_list(
            'id', 'name', 'description', 'img_src'
            )

    @classmethod
    def getProduct(cls, product_id) -> 'Product':
        return cls.objects(id=ObjectId(product_id)).first()

    def addProduct(self, category_id):
        if(Product.objects(name=self.name)):
            abort(404, 'Product already exist')
        URL = os.environ.get('category_url', 'http://127.0.0.1:5000')
        URL += "/map"
        data = {
            'category_id': category_id,
            'product_id': self.id
        }
        try:
            response = requests.post(url=URL, data=data)
            response.raise_for_status()
        except requests.exceptions.HTTPError as errh:
            print(errh)
            raise errh
        except requests.exceptions.ConnectionError as errc:
            print(errc)
            raise errc
        except requests.exceptions.Timeout as errt:
            print(errt)
            raise errt
        except requests.exceptions.RequestException as err:
            print(err)
            raise err
        except Exception as e:
            raise e
        try:
            data = self.save()
        except Exception as e:
            print("Saving Causing problem")
            raise e

    def updateProduct(self):
        self.save()

    def deleteProduct(self):
        URL = os.environ.get('category_url', 'http://127.0.0.1:5000')
        URL += "/products/" + str(self.id)
        # delete the product entry from customer database
        try:
            response = requests.delete(url=URL)
            response.raise_for_status()
        except requests.exceptions.HTTPError as errh:
            print(errh)
            raise errh
        except requests.exceptions.ConnectionError as errc:
            print(errc)
            raise errc
        except requests.exceptions.Timeout as errt:
            print(errt)
            raise errt
        except requests.exceptions.RequestException as err:
            print(err)
            raise err
        except Exception as e:
            raise e
        self.delete()
