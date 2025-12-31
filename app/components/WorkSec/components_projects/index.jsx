"use client"
import styles from "./style.module.css"

export default function Project({ title, description, index, setModal }) {
  return (
    <div
      className={styles.project}
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      onClick={() => setModal({ active: true, index })}
    >
      {/* CLIENT */}
      <div className={styles.client}>
        <h2>{title}</h2>
      </div>

      {/* LOCATION */}
      <div className={styles.location}>
        <p>Spain</p>
      </div>

      {/* SERVICES */}
      <div className={styles.services}>
        <p>{description}</p>
      </div>

      {/* YEAR */}
      <div className={styles.year}>
        <p>2024</p>
      </div>
    </div>
  )
}
