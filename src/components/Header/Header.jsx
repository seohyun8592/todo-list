import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.button} onClick={toggleDarkMode}>
        {!darkMode ? <HiMoon /> : <HiSun />}
      </button>
      <ul className={styles.listItem}>
        {filters.map((value, index) => (
          <li
            key={index}
            className={`${styles.item} ${filter === value && styles.selected}`}
          >
            <button
              className={styles.btn}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
