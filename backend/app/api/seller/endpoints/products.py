from fastapi import APIRouter
from app.db.supabase import supabase

router = APIRouter()

@router.get("/")
def get():
    return {"message": "Seller Products Endpoint"}

@router.get("/test")
def test():
    res = supabase.table("test3").select("*").execute()
    print(res.data)
    return res.data
