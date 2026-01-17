from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.seller.router import api_router as seller_router
from app.api.user.router import api_router as user_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[ 
        "http://localhost:5173",
        "http://127.0.0.1:8000",
        ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(seller_router , prefix = "/api", tags = ["Seller"])
app.include_router(user_router , prefix = "/api", tags = ["User"])

