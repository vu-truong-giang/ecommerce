from app.db.supabase import supabase

def get_products():
    res = (
        supabase
        .table("products")
        .select("*")
        .execute()
    )
    return res.data

def create_product(data:dict):
    res = (
        supabase
        .table("products")
        .insert(data)
        .execute()
    )
    return res.data[0]

