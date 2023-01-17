import React from 'react';
import styles from './Todo.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { status, text } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.list}>
      <div className={styles.left}>
        <input
          id="checkbox"
          type="checkbox"
          checked={status === 'completed'}
          onChange={handleChange}
          className={styles.input}
        />
        <label htmlFor="checkbox">{text}</label>
      </div>

      <button onClick={handleDelete} className={styles.delete}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
