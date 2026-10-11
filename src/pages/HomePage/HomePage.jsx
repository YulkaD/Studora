import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './HomePage.module.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <div className={styles.welcomeSection}>
          <h2>Привіт, Студент!</h2>
          <p>Ось твій навчальний план на сьогодні</p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={`${styles.statIconBox} ${styles.blue}`}>📋</div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>11</span>
              <span className={styles.statLabel}>Усього завдань</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={`${styles.statIconBox} ${styles.green}`}>✔️</div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Виконано</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={`${styles.statIconBox} ${styles.orange}`}>⏳</div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>6</span>
              <span className={styles.statLabel}>В процесі</span>
            </div>
          </div>
        </div>

        <div className={styles.sectionHeader}>
          <h3>Найближчі завдання</h3>
          <span className={styles.headerRight}>Дедлайн</span>
        </div>

        <div className={styles.taskList}>
          <div className={styles.taskItem}>
            <div className={styles.taskLeft}>
              <input type="checkbox" className={styles.checkbox} />
              <span>Лабораторна робота N1</span>
            </div>
            <span className={`${styles.badge} ${styles.badgePurple}`}>Бази даних</span>
            <span className={styles.date}>15.09</span>
          </div>

          <div className={styles.taskItem}>
            <div className={styles.taskLeft}>
              <input type="checkbox" className={styles.checkbox} />
              <span>Лабораторна робота N2</span>
            </div>
            <span className={`${styles.badge} ${styles.badgeYellow}`}>Пакети прикладних програм</span>
            <span className={styles.date}>18.09</span>
          </div>

          <div className={styles.taskItem}>
            <div className={styles.taskLeft}>
              <input type="checkbox" className={styles.checkbox} />
              <span>Підготувати доповідь</span>
            </div>
            <span className={`${styles.badge} ${styles.badgeGreenTag}`}>Історії успіху відомих людей</span>
            <span className={styles.date}>21.09</span>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.addBtn} onClick={() => navigate('/create-task')}>
            + Додати завдання
          </button>
        </div>
      </div>
    </div>
  );
}