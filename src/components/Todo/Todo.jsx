import React from 'react';
import styles from './Todo.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, status, text } = todo;
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
          id={id}
          type="checkbox"
          checked={status === 'completed'}
          onChange={handleChange}
          className={styles.input}
        />
        <label htmlFor={id}>{text}</label>
      </div>

      <button onClick={handleDelete} className={styles.delete}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
