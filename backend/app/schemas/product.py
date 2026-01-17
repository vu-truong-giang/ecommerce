from pydantic import BaseModel
from uuid import UUID

class ProductCreate(BaseModel):
    name : str
    description : str
    stock : int
    price : float

class ProductResponse(BaseModel):
    id : UUID
    name : str
    description : str
    stock : int 
    price : float
