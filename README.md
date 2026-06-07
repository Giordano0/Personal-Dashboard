Personal Dashboard 🌅

An interactive personal dashboard for the browser, designed with an elegant glassmorphism interface inspired by the warm colors of a coastal sunset.
✨ Features

    Real-Time Clock: Displays the exact time updated instantly, accompanied by a dynamic greeting that changes based on the time of day (morning, afternoon, evening).

    Interactive To-Do List: Add new tasks, cross them off when completed, or delete them from the list. Features a smooth, clean scroll area for long lists.

    Persistent Data Storage: Utilizes the browser's localStorage. Closing the tab or reloading the page will not result in lost tasks.

    Glassmorphism Design & Custom UI: A container with a frosted glass effect and a minimalist custom scrollbar (without a visible background track) for a premium visual experience.

🛠️ Technologies Used

    HTML5: Page structure.

    CSS3: Flexbox, CSS variables, gradients, backdrop-filter for the glass effect, and pseudo-elements for advanced scrollbar styling.

    Vanilla JavaScript: Separate modules for logic, DOM manipulation, time management, and the Web Storage API, all built without external frameworks or libraries.

📂 Project Architecture

The code is organized in a modular way to ensure tidiness and scalability:
Plaintext

/
├── index.html
├── css/
│   ├── style.css             # Main styles, variables, glass effect, and scrollbar
│   └── animations.css        # Reserved for future animations
└── js/
    ├── main.js               # Main coordinator (Entry point)
    ├── timeManager.js        # Clock and dynamic greeting engine
    └── todoController.js     # Task addition, rendering, and storage logic

🚀 How to Run the Project

This project is entirely static and does not require any complex development environment, local server, or Node.js.

    Download or clone the files to your computer.

    Ensure the folder structure matches the tree shown above.

    Double-click the index.html file to open it in any modern web browser (Chrome, Safari, Firefox, Edge).
