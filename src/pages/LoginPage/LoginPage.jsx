import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.brand}>
          <span className={styles.logoIcon}>S</span>TUDORA
        </div>
        <h2>Вітаємо у Studora</h2>
        <p className={styles.subtitle}>Увійди у свій навчальний простір</p>

        <form onSubmit={handleLogin} className={styles.form}>
          <input type="email" placeholder="Email" className={styles.input} required />
          <input type="password" placeholder="Пароль" className={styles.input} required />
          <button type="submit" className={styles.submitBtn}>Увійти</button>
        </form>

        <p className={styles.footerText}>
          Ще немає акаунту? <a href="#register" className={styles.link}>Зареєструватися</a>
        </p>
      </div>
    </div>
  );
}