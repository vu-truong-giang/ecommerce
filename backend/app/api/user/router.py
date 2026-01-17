from fastapi import APIRouter, Depends
from app.api.user.endpoints import user

api_router = APIRouter()
api_router.include_router(
    user.router,
    prefix="/user",
    tags=["Users"]
)

@api_router.get("/me")
def get_user():
    return {"msg": "user profile"}