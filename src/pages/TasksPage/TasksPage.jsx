import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './TasksPage.module.css';

export default function TasksPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Мої завдання</h2>
          <p>Переглядай та контролюй свої домашні завдання</p>
        </div>

        <div className={styles.filtersRow}>
          <div className={styles.filterTabs}>
            <button className={`${styles.filterBtn} ${styles.active}`}>Всі</button>
            <button className={styles.filterBtn}>Активні</button>
            <button className={styles.filterBtn}>Виконані</button>
          </div>
          <div className={styles.dropdownContainer}>
            <span className={styles.label}>Предмет:</span>
            <div className={styles.selectWrapper}>
              <select className={styles.select}>
                <option>Всі предмети</option>
                <option>Бази даних</option>
                <option>Пакети прикладних програм</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.taskList}>
          <div className={styles.taskCard}>
            <div className={styles.taskLeft}>
              <input type="checkbox" defaultChecked className={styles.checkboxDone} />
              <div className={styles.taskText}>
                <div className={styles.taskTitle}>Лабораторна робота N1</div>
                <div className={styles.taskSub}>Бази даних</div>
              </div>
            </div>
            <div className={styles.badgeWrapper}>
              <span className={`${styles.badge} ${styles.badgeGreen}`}>Низька</span>
            </div>
            <div className={styles.dateWrapper}>
              <span className={styles.date}>📅 15.09</span>
            </div>
          </div>

          <div className={styles.taskCard}>
            <div className={styles.taskLeft}>
              <input type="checkbox" defaultChecked className={styles.checkboxDone} />
              <div className={styles.taskText}>
                <div className={styles.taskTitle}>Лабораторна робота N2</div>
                <div className={styles.taskSub}>Пакети прикладних програм</div>
              </div>
            </div>
            <div className={styles.badgeWrapper}>
              <span className={`${styles.badge} ${styles.badgeYellow}`}>Середній</span>
            </div>
            <div className={styles.dateWrapper}>
              <span className={styles.date}>📅 18.09</span>
            </div>
          </div>

          <div className={styles.taskCard}>
            <div className={styles.taskLeft}>
              <input type="checkbox" className={styles.checkbox} />
              <div className={styles.taskText}>
                <div className={styles.taskTitle}>Підготувати доповідь</div>
                <div className={styles.taskSub}>Історії успіху відомих людей</div>
              </div>
            </div>
            <div className={styles.badgeWrapper}>
              <span className={`${styles.badge} ${styles.badgeRed}`}>Висока</span>
            </div>
            <div className={styles.dateWrapper}>
              <span className={styles.date}>📅 21.09</span>
            </div>
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