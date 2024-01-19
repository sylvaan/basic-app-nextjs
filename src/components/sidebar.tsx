import React from 'react';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/dashboard">To-Do List</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;