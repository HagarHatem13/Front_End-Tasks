// src/App.jsx
import CrudApp from "./components/CrudApp/CrudApp";
import TodoList from "./components/TodoList/TodoList";
import "./styles.css"; // Fixed typo

export default function App() {
  return (
    <div className="app-container">
      <h1>📘 React CRUD + 📝 jQuery Todo</h1>
      <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />
      <div className="components-wrapper">
        <CrudApp />
        <TodoList />
      </div>
    </div>
  );
}

