from .product import Products, GetProduct, EditProduct, HealthCheck

ROUTES_MAP = [
  {"route": "/<string:_id>", "resource": Products},
  {"route": "/", "resource": EditProduct},
  {"route": "/product/<string:product_id>", "resource": GetProduct},
  {"route": "/healthcheck", "resource": HealthCheck}
]
