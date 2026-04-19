# Almdrasa Notes Application

**[🚀 View Live Demo](https://mostafagamalbisher.github.io/Note-app/)** | **[📂 GitHub Repository](https://github.com/MostafaGamalBisher/Note-app)**

A professional-grade, responsive CRUD (Create, Read, Update, Delete) note-taking application. Built with a focus on clean architecture, state management, and robust security, this project features a modern UI, rich-text editing, and real-time search functionality.

## ✨ Features

- **Rich Text Editing:** Integrated with **Quill.js (Bubble Theme)** for a sleek, distraction-free writing experience.
- **XSS Security:** User input is sanitized using **DOMPurify** to prevent Cross-Site Scripting vulnerabilities while preserving text formatting.
- **Real-time Search:** Instantly filter notes by title or content as you type.
- **Pinning System:** Prioritize important notes by pinning them to a dedicated section at the top of the list.
- **State Management:** Custom Vanilla JavaScript store handles data manipulation and synchronizes with `localStorage` for data persistence.
- **Responsive Design:** Fully mobile-responsive layout featuring a smooth, sliding off-canvas navigation menu for smaller screens.

## 🛠️ Tech Stack

- **Core:** HTML5, CSS3, Vanilla JavaScript (ES Modules)
- **Styling:** SCSS following the **BEM (Block, Element, Modifier)** methodology for scalable and predictable styling.
- **Build Tool:** Vite (for fast development and optimized bundling)
- **Libraries:** \* `quill` (Rich Text Editor)
  - `dompurify` (HTML Sanitizer)

## 🏗️ Project Architecture

The JavaScript logic is decoupled to ensure a clean separation of concerns, mirroring modern framework patterns:

- `store.js`: Manages application state, array manipulation, and `localStorage` interactions.
- `ui.js`: Centralizes DOM element caching and UI state toggles.
- `render.js`: Handles template literal generation and dynamic HTML injection.
- `main.js`: Acts as the controller, initializing libraries, and binding event listeners.

## 🚀 Local Development Setup

To run this project locally on your machine:

1. **Clone the repository:**

   git clone [https://github.com/MostafaGamalBisher/Note-app.git](https://github.com/MostafaGamalBisher/Note-app.git)

2. **Navigate to the project directory:**

   cd Note-app

3. **Install dependencies:**

   npm install

👨‍💻 **Author**

## Mostafa Gamal Bisher

_Front-End Software Engineer_

_Developed as part of the Front-End Diploma track at the Al-Mdrasa platform._
