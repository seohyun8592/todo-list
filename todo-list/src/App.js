import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import DarkModeContext from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeContext>
      <div className="wrap">
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList filter={filter} />
      </div>
    </DarkModeContext>
  );
}
