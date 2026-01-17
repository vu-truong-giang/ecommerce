from app.db.supabase import supabase
from typing import Optional
from app.schemas.user import UserCreate, UserUpdate
from app.api.seller import router


def get_users():
    res = (
        supabase
        .table("users")
        .select("*")
        .execute()
    )
    return res.data

def get_user_by_id(user_id: str) -> Optional[dict]:
    res = (
        supabase
        .table("users")
        .select("*")
        .eq("id", user_id)
        .single()
        .execute()
    )
    return res.data
def create_user(user: UserCreate):
    res = (
        supabase
        .table("users")
        .insert({
            "id": user.id,
            "email": user.email,
        })
        .execute()
    )
    return res.data

def update_user(user_id: str, user: UserUpdate):
    update_data = {}
    if user.fullname is not None:
        update_data["fullname"] = user.fullname
    if user.phone is not None:
        update_data["phone"] = user.phone
    res = (
        supabase
        .table("users")
        .update(update_data)
        .eq("id", user_id)
        .execute()
    )
    return res.data[0]

def check_profile_completion(user_id: str) -> bool:
    res = (
        supabase
        .table("users")
        .select("id, fullname , phone")
        .eq("id", user_id)
        .single()
        .execute()
    )

    user = res.data
    need_update = (
        not user.get("fullname") or
        not user.get("phone")
    )

    return {
        "user":user,
        "need_update": need_update
    }