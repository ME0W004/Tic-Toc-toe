from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .ai import get_best_move

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "http://127.0.0.1:5500", 
    "null",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)
#

class BoardState(BaseModel):
    board: list[str]  

@app.post("/move")
def ai_move(state: BoardState):
    best_move = get_best_move(state.board)
    return {"move": best_move}
