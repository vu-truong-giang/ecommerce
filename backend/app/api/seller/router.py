from fastapi import APIRouter
from app.api.seller.endpoints import products

api_router = APIRouter()

api_router.include_router(
    products.router,
    prefix="/products",
    tags=["Seller Products"]
)

