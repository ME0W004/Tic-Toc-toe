
This is a classic Tic Tac Toe game developed with a modern web frontend (HTML, CSS, JavaScript) and a powerful AI backend built using Python (FastAPI and Minimax algorithm). The project allows users to play against an intelligent AI opponent or against another human player.

## ✨ Features

* **Two Game Modes:**
    * **Player vs. AI:** Challenge a smart AI powered by the Minimax algorithm, designed to play optimally.
    * **2 Players:** Enjoy a classic Tic Tac Toe match with a friend.
* **Best-of-3 Series:** Play multiple rounds, and the game keeps track of scores and declares a series winner.
* **Responsive Design:** Play seamlessly on various screen sizes (desktop, tablet, mobile).
* **Clean and Modular Code:** Separation of concerns with frontend (HTML, CSS, JS) and backend (Python API).

## 🚀 Technologies Used

**Frontend:**
* **HTML5:** Structure of the game.
* **CSS3:** Styling and visual design.
* **JavaScript:** Core game logic, user interaction, and communication with the AI API.

**Backend (AI):**
* **Python 3:** For the AI logic.
* **FastAPI:** A modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.
* **Minimax Algorithm:** The core AI algorithm implemented in Python to determine the optimal move for the AI player.
* **Uvicorn:** An ASGI web server for running the FastAPI application.
* **Pydantic:** Used by FastAPI for data validation and settings management.

## 📦 Project Structure

.
├── ai_backend/ 
 │   ├── main.py             # FastAPI application for AI endpoint
 │   └── ai.py               # Minimax AI algorithm implementation
 ├── game.html               # Main game page
 ├── index.html              # Game mode selection page
 ├── script.js               # Frontend JavaScript game logic
 ├── style.css               # Frontend CSS styling
 └── README.md
 └── .gitignore
 └── requirements.txt



The game tracks wins/losses and determines a series winner in a best-of-3 format.

Click "Restart" to start a new game or series.

