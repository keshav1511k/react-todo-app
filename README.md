📝 React Todo App
A clean and beginner-friendly Todo Application built using React (JavaScript + JSX).
This project is built to clearly understand core React concepts by implementing a real-world application step by step.


🚀 Features
Add new todos
Delete todos
Edit existing todos
Mark todos as completed
Filter todos (All / Active / Completed)
Persistent data using localStorage
Clean and minimal UI using pure CSS
🛠️ Tech Stack
React (JavaScript + JSX)
Vite (development bundler)
CSS (no external UI libraries)


📂 Project Structure
src/
├── components/
│ ├── TodoInput.jsx
│ ├── TodoList.jsx
│ └── TodoItem.jsx
├── App.jsx
├── main.jsx
└── index.css


🧠 React Concepts Used

1️⃣ Components
The application is broken into reusable components:
TodoInput – handles adding new todos
TodoList – renders the list of todos
TodoItem – manages individual todo logic (edit, delete, toggle)

2️⃣ State Management (useState)
Manages the todo list
Manages filter state
Manages edit mode and input values

3️⃣ Props
Data flows from parent to child
Functions are passed as props for child-to-parent communication

4️⃣ Controlled Inputs
Input fields are controlled using React state
Real-time UI updates while typing

5️⃣ Conditional Rendering
Edit mode vs view mode
UI updates based on state
Active filter highlighting

6️⃣ List Rendering
Todos rendered using map()
key prop used for efficient rendering

7️⃣ Side Effects (useEffect)
Saves todos to localStorage
Runs whenever the todo state changes

8️⃣ localStorage
Todos persist even after page refresh
Uses JSON.stringify() and JSON.parse()

9️⃣ Immutability
State updates using:
Spread operator (...)
map() and filter()
Ensures React detects changes and re-renders correctly

🔁 React Re-render Lifecycle (In This Project)
setState() triggers a re-render
Component function re-executes
New JSX is created
React compares old and new Virtual DOM
Only changed DOM elements are updated


📦 Installation & Setup

Clone the repository
git clone <https://github.com/keshav1511k/react-todo-app.git>

Go to the project directory
cd react-todo-js

Install dependencies
npm install

Start development server
npm run dev

🧪 How to Test the App
Add a todo
Refresh the page → todos persist
Edit a todo
Toggle completion status
Apply filters
Delete todos


🎯 Learning Outcome
After completing this project, you will have a strong understanding of:
React component architecture
State and props
Controlled components
Conditional rendering
Re-render lifecycle
Side effects using useEffect
Real-world React patterns
This project is interview-ready and ideal for React revision.


⭐ Future Enhancements
Keyboard support (Enter key)
Drag and drop todos
Custom hook (useTodos)
Performance optimization (React.memo)
Dark mode


📄 License
This project is open-source and free to use for learning and practice purposes.