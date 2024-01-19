import React from 'react';
import TodoCard from './todocard';

interface DashboardProps {
  todos: { id: number; task: string; completed: boolean }[];
}

const Dashboard: React.FC<DashboardProps> = ({ todos }) => {
  return (
    <div className="dashboard">
      <h1>To-Dos</h1>
      <button className="add-button">Add</button>
      <div className="todo-cards">
        {/* <TodoCard title="To-Dos" todos={todos.filter((todo) => !todo.completed)} />
        <TodoCard title="Completed" todos={todos.filter((todo) => todo.completed)} /> */}
      </div>
    </div>
  );
};

export default Dashboard;