import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './CreateTaskPage.module.css';

export default function CreateTaskPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <div className={styles.modalCard}>
          <div className={styles.modalHeader}>
            <h2>Додати нове завдання</h2>
            <p>Створіть завдання для навчання</p>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Нове завдання</label>
            <input type="text" placeholder="Нове завдання" className={styles.input} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Предмет</label>
            <div className={styles.selectWrapper}>
              <select className={styles.select} defaultValue="">
                <option value="" disabled>Оберіть предмет</option>
                <option>Бази даних</option>
                <option>Пакети прикладних програм</option>
                <option>Історії успіху відомих людей</option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Опис</label>
            <textarea placeholder="Опис завдання для виконання" className={styles.textarea}></textarea>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Дедлайн</label>
            <div className={styles.dateWrapper}>
              <input type="text" placeholder="дд . мм . рррр" className={styles.input} />
              <span className={styles.calendarIcon}>📅</span>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Пріоритет</label>
            <div className={styles.priorityRow}>
              <button type="button" className={`${styles.priorityBtn} ${styles.pEasy}`}>Легкий</button>
              <button type="button" className={`${styles.priorityBtn} ${styles.pMedium}`}>Середній</button>
              <button type="button" className={`${styles.priorityBtn} ${styles.pHard}`}>Важкий</button>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.cancelBtn} onClick={() => navigate('/home')}>Скасувати</button>
            <button className={styles.submitBtn} onClick={() => navigate('/tasks')}>Додати завдання</button>
          </div>
        </div>
      </div>
    </div>
  );
}