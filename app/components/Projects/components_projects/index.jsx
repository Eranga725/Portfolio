'use client';
import styles from './style.module.css';

export default function Project({ title, description, index, setModal }) {
  return (
    <div
      className={styles.project}
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      onClick={() => setModal({ active: true, index })}  // <-- FIXED
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
