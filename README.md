
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


## ⚙️ Installation & Setup

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd YOUR_REPO_NAME
(Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub username and repository name)

2. Set Up Python Backend
Navigate into the ai_backend directory to set up the Python environment:

Bash

cd ai_backend
a. Create a Virtual Environment (Recommended)
It's highly recommended to use a virtual environment to manage dependencies:

Bash

python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
b. Install Dependencies

Bash

pip install -r requirements.txt
c. Run the FastAPI Server

From the ai_backend directory, go back one level to the root of your project:

Bash

cd ..
Now, run the FastAPI application using Uvicorn:

Bash

uvicorn ai_backend.main:app --reload
You should see output indicating that the Uvicorn server is running, typically on http://127.0.0.1:8000. Keep this terminal open.

3. Run the Frontend
Open the index.html file in your web browser. You can simply double-click the file, or use a tool like VS Code's "Live Server" extension for a better development experience.

If using Live Server, it usually runs on http://127.0.0.1:5500. Ensure your main.py has http://127.0.0.1:5500 (or your Live Server port) included in the allow_origins list for CORS.

🕹️ How to Play
Open index.html in your browser.

Choose "Play vs AI" to challenge the computer or "2 Players" to play with a friend.

Click on any empty cell to make your move.

The game tracks wins/losses and determines a series winner in a best-of-3 format.

Click "Restart" to start a new game or series.
