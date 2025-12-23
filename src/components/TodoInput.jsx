import { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    onAddTodo(text);
    setText("");
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={text}
        placeholder="Enter todo..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
