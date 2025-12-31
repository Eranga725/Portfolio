"use client"
import styles from "./style.module.css"
import Image from "next/image"

export default function Project({ title, description, index, setModal, src }) {
  return (
    <div
      className={styles.project}
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      onClick={() => setModal({ active: true, index })}
    >
      <div className={styles.projectImageWrapper}>
        <Image
          src={src || "/placeholder.svg"}
          alt={title}
          fill
          className={styles.projectImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 0vw"
        />
      </div>

      <h2>{title}</h2>
      <p>{description}</p>

      <div className={styles.projectInfoMobile}>
        <h3>{title}</h3>
        <div className={styles.projectDetails}>
          <p>{description}</p>
          <span className={styles.projectYear}>2024</span>
        </div>
      </div>
      
    </div>
            
  )
}
