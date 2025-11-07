# 🎮 Monty Hall Game (Interactive Web Version)

A fun, interactive web version of the **Monty Hall Problem**, built using **FastAPI**, **Uvicorn**, and a simple **HTML/CSS/JavaScript** frontend.

Players can click to choose a door, watch the host open a goat door, and then decide whether to **switch** or **stay**.  

All logic runs in the browser via API calls to the FastAPI backend.

---

## 🧩 Game Rules

The Monty Hall problem is a classic probability puzzle:

1. You are shown **three doors** — behind one is a **car 🚗** and behind the other two are **goats 🐐**.  
2. You pick one door.  
3. The host opens **one of the other doors**, always revealing a **goat**.  
4. You are then asked if you’d like to **switch** to the remaining unopened door.  
5. You either **win the car 🚗** or **get a goat 🐐**, depending on your choice!

Statistically, switching gives you a **2/3 chance to win**, while staying gives you **1/3**.

---

## 🖥️ Tech Stack

- **FastAPI** — backend API and web server  
- **Uvicorn** — ASGI server  
- **HTML + CSS + JavaScript** — frontend UI  
- **Docker** — containerized for easy deployment  

---

## 🗂️ Project Structure

```
monty-hall/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── static/
│   │   ├── style.css
│   │   └── script.js
│   └── templates/
│       └── index.html
├── requirements.txt
├── Dockerfile
└── README.md
```

---

## 🚀 Running Locally (No Docker)

### 1️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 2️⃣ Start the server

```bash
uvicorn app.main:app --reload --port 3000
```

### 3️⃣ Open in browser

👉 [http://localhost:3000](http://localhost:3000)

---

## 🐳 Running with Docker

### 1️⃣ Build the image

```bash
docker build -t monty-hall-gui .
```

### 2️⃣ Run the container

```bash
docker run -d -p 3000:3000 monty-hall-gui
```

### 3️⃣ Open in browser

👉 [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Environment Details

| Component | Version | Description |
|------------|----------|-------------|
| Python | 3.11+ | Required base runtime |
| FastAPI | 0.115+ | API framework |
| Uvicorn | 0.30+ | ASGI server |
| Jinja2 | latest | Template engine for HTML |

---

## 🧠 Gameplay Flow

1. When the page loads, you’re prompted to **pick a door**.  
2. The host reveals one door that has a **goat 🐐**.  
3. You decide to **switch** or **stay**.  
4. The game reveals your result — **win** or **lose**.  
5. You can play again immediately.

---

## 💡 Example Docker Workflow

```bash
# Clone the repo
git clone https://github.com/<your-username>/monty-hall.git
cd monty-hall

# Build Docker image
docker build -t monty-hall-gui .

# Run it
docker run -d -p 3000:3000 monty-hall-gui
```

Visit:
```
http://localhost:3000
```

---

## 📦 Example Dockerfile

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 3000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "3000"]
```

---

## 🧾 License

MIT License — feel free to use, modify, and share.
