from models.category import Category
from .metadata import CategoriesData, ProductCategoryData
from models.product_category_map import ProductCategoryMap


def insert_metadata(db):
    for data in CategoriesData:
        if Category.get(data['id']):
            continue
        catergory = Category(
            data['name'],
            data['description'],
            data['img_src']
            )
        catergory.save()
    for data in ProductCategoryData:
        if ProductCategoryMap.get(data['product_id']):
            continue
        pcMap = ProductCategoryMap(
            data['category_id'],
            data['product_id']
            )
        pcMap.save()
