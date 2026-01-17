from typing import Optional
from pydantic import BaseModel, EmailStr
from uuid import UUID

class UserCreate(BaseModel):
    id : UUID
    email : EmailStr

class UserResponse(BaseModel):
    id : UUID
    email : EmailStr
    fullname : str
    phone : str
    role : str

class UserUpdate(BaseModel):
    fullname : Optional[str] = None
    phone : Optional[str] = None
    
