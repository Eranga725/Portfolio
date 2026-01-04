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
          <h3 className={styles.title}>UI / UX Design</h3>
          <p>Thoughtful and user-centered design that turns ideas into clear digital experiences.</p>
        </div>

        <div className={styles.card}>
          <span className={styles.number}>02</span>
          <h3 className={styles.title}>Web Development</h3>
          <p>
          Modern, scalable applications built with performance, interaction, and maintainability in mind.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.number}>03</span>
          <h3 className={styles.title}>AI & Data Science</h3>
          <p>From data analysis to machine learning models, I build systems that learn and make smarter decisions.</p>
        </div>
      </div>
    </section>
    </main>
  );
}
