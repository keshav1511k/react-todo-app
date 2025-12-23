import { useState } from "react";

function TodoItem({ todo, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() === "") return;
    onUpdate(todo.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span
            className={todo.completed ? "completed" : ""}
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}
          </span>

          <div>
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button onClick={() => onDelete(todo.id)}>❌</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
