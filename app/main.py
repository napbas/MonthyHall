from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import random

app = FastAPI(title="Monty Hall Game")

# Serve static files and templates
app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/api/start")
async def start_game():
    """Start a new game and return the door setup."""
    prize_door = random.randint(1, 3)
    return {"doors": [1, 2, 3], "prize_door": prize_door}

@app.get("/api/host")
async def host_action(player_choice: int, prize_door: int):
    """Host opens one of the remaining doors with a goat."""
    remaining = [d for d in [1, 2, 3] if d != player_choice and d != prize_door]
    host_opens = random.choice(remaining)
    return {"host_opens": host_opens}

@app.get("/api/result")
async def result(player_choice: int, prize_door: int):
    win = player_choice == prize_door
    return {"result": "win" if win else "lose"}

