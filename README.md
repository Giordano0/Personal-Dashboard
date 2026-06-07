<h1 align="center">
    Personal Dashboard
</h1>

<p align="center">
    <img width="250" height="300" alt="PersonalDashboardPreview" src="https://github.com/user-attachments/assets/4999b7cc-01a7-4732-8599-1905904cec1b" />
</p>
A minimal, elegant personal dashboard built with Vanilla JavaScript, HTML, and CSS — featuring a live clock, dynamic time-based greetings, and a persistent to-do list with a glassmorphism aesthetic.

🔗 **Live Demo:** [giordano0.github.io/Personal-Dashboard](https://giordano0.github.io/Personal-Dashboard/)

---

## Features

- **Live Clock** — updates every second, always showing the current time
- **Dynamic Greetings** — automatically switches between Good Morning, Good Afternoon, and Good Evening based on the hour
- **To-Do List** — add, complete, and delete tasks with a clean interface
- **Persistent Storage** — tasks are saved to `localStorage` and survive page refreshes
- **Glassmorphism Design** — frosted-glass card over a vivid gradient background
- **Responsive Layout** — adapts gracefully to mobile screens

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, flexbox, backdrop-filter) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Poppins |
| Storage | Web Storage API (`localStorage`) |

---

## Project Structure

```
Personal-Dashboard/
├── index.html
├── css/
│   ├── style.css         # Layout, glassmorphism card, component styles
│   └── animations.css    # Animation definitions
└── js/
    ├── main.js           # Entry point — initializes all modules on DOMContentLoaded
    ├── timeManager.js    # Clock and greeting logic
    └── todoController.js # Task CRUD, rendering, and localStorage persistence
```

---

## How It Works

**Time & Greetings (`timeManager.js`)**  
`initTimeManager()` runs `updateTime()` immediately, then schedules it with `setInterval` every 1000ms. The greeting updates alongside the clock based on hour ranges (5–11 → Morning, 12–17 → Afternoon, 18+ → Evening).

**To-Do Controller (`todoController.js`)**  
Tasks are stored as an array of objects `{ id, text, completed }`. Every mutation (add, toggle, delete) calls `saveTasks()` followed by `renderTasks()`, which rebuilds the task list from the current array state. IDs use `Date.now()` for uniqueness.

---

## Getting Started

```bash
git clone https://github.com/Giordano0/Personal-Dashboard.git
cd Personal-Dashboard
```

Then open `index.html` in your browser — no build step or dependencies required.

---

## Author

**Giordano Dolenz** — [github.com/Giordano0](https://github.com/Giordano0)
