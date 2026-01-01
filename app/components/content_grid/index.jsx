"use client";

import React from "react";
import styles from "./style.module.css"

export default function Services() {
  return (
    <main className={styles.main}>
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>I can help you with.</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.number}>01</span>
          <h3 className={styles.title}>Design</h3>
          <p>
            With a solid track record in designing websites, I deliver strong and
            user-friendly digital designs.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.number}>02</span>
          <h3 className={styles.title}>Development</h3>
          <p>
            I build scalable websites with a focus on interaction and motion.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.number}>03</span>
          <h3 className={styles.title}>The full package</h3>
          <p>
            From concept to implementation — I deliver  digital products.
          </p>
        </div>
      </div>
    </section>
    </main>
  );
}
