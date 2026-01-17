from fastapi import APIRouter
from app.db.supabase import supabase
from app.schemas.user import UserCreate, UserResponse, UserUpdate
from app.services.user_services import get_user_by_id, get_users, create_user, update_user , check_profile_completion

router = APIRouter()

@router.get("/", response_model=list[UserResponse])
def read_users():
    return get_users()

@router.get("/profile/{user_id}", response_model=UserResponse)
def read_user(user_id: str):
    return get_user_by_id(user_id)

@router.post("/create", response_model=UserResponse)
def create_user_endpoint(user: UserCreate):
    return create_user(user)

@router.put("/updateProfile/{user_id}", response_model=UserResponse)
def update_user_endpoint(user_id: str, user: UserUpdate):
    return update_user(user_id, user)

@router.get("/check-profile/{user_id}")
def check_profile_completion_endpoint(user_id: str):
    return check_profile_completion(user_id)

