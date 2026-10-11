import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>S</span>TUDORA
      </div>
      <nav className={styles.navLinks}>
        <Link 
          to="/home" 
          className={`${styles.navLink} ${location.pathname === '/home' ? styles.active : ''}`}
        >
          Головна
        </Link>
        <Link 
          to="/tasks" 
          className={`${styles.navLink} ${location.pathname === '/tasks' ? styles.active : ''}`}
        >
          Завдання
        </Link>
        <Link 
          to="/create-task" 
          className={`${styles.navLink} ${location.pathname === '/create-task' ? styles.active : ''}`}
        >
          Додати завдання
        </Link>
      </nav>
    </header>
  );
}