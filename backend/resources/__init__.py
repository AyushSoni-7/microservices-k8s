from .categories import Categories
from .category import Category
from .product_category_map import ProductCategoryMap
from .products import Products

ROUTES_MAP = [
  {"route": "/<int:category_id>", "resource": Category},
  {"route": "/", "resource": Categories},
  {"route": "/map", "resource": ProductCategoryMap},
  {"route": "/products/<string:_id>", "resource": Products}
]
