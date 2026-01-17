from fastapi import APIRouter
from app.api.seller.endpoints import products

api_router = APIRouter()

api_router.include_router(
    products.router,
    prefix="/products",
    tags=["Seller Products"]
)

@api_router.get("/me")
def get_seller():
    return {"msg": "seller profile"}
