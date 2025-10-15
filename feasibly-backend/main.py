from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import router as api_router
from decouple import config

app = FastAPI(
    title="Feasibly API",
    description="API for providing business feasibility analysis.",
    version="0.1.0"
)

# CORS (Cross-Origin Resource Sharing)
# This allows your frontend (running on a different domain/port) to communicate with the backend.
origins = [
    config("FRONTEND_URL", default="http://localhost:3000"),
    "http://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api", tags=["analysis", "business-metrics"])

@app.get("/", tags=["root"])
def read_root():
    """A simple endpoint to check if the API is running."""
    return {"message": "Welcome to the Feasibly API!"}
