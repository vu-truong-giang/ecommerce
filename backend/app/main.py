from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.seller.router import api_router as seller_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(seller_router , prefix = "/api/seller", tags = ["Seller"])

