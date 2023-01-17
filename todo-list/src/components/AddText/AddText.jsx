import React, { useState } from 'react';
import styles from './AddText.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function AddText({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const handleClick = () => {
    if (text.trim() === '') {
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };

  const handleDown = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <article className={styles.container}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleDown}
        className={styles.input}
      ></input>
      <button className={styles.btn} onClick={handleClick}>
        Add
      </button>
    </article>
  );
}
