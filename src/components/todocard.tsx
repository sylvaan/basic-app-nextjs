import React from 'react';

interface TodoCardProps {
  title: string;
  todos: { id: number; task: string; completed: boolean }[];
  onToggleComplete: (id: number) => void;
  onEditTodo: (id: number) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ title, todos, onToggleComplete, onEditTodo }) => {
  return (
    <div className="todo-card">
      <h2>{title}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleComplete(todo.id)}
            />
            <span>{todo.task}</span>
            <button onClick={() => onEditTodo(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoCard;