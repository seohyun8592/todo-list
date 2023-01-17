import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.css';
import AddText from '../AddText/AddText';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodo());

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (update) => {
    setTodos(todos.map((t) => (t.id === update.id ? update : t)));
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };

  useEffect(() => {
    const objString = JSON.stringify(todos);
    localStorage.setItem('todos', objString);
  }, [todos]);

  const filterd = getfilter(todos, filter);

  return (
    <div className={styles.container}>
      <section className={styles.contents}>
        <ul className={styles.listItem}>
          {filterd.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </section>
      <AddText onAdd={handleAdd} />
    </div>
  );
}

function readTodo() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getfilter(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((t) => t.status === filter);
}
