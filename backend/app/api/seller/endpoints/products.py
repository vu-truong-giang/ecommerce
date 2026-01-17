from fastapi import APIRouter
from app.db.supabase import supabase
from app.schemas.product import ProductCreate , ProductResponse
from app.services.product_services import get_products, create_product

router = APIRouter()
@router.get("/test")
def test():
    res = supabase.table("test3").select("*").execute()
    print(res.data)
    return res.data

@router.get("/" , response_model = list[ProductResponse])
def get():
    return get_products()

@router.post("/products" , response_model=ProductResponse)
def create(product: ProductCreate):
    return create_product(product.dict())




