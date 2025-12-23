import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onToggle, onUpdate }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default TodoList;
