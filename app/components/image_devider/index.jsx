"use client";

import Image from "next/image";
import styles from "./style.module.css";

export default function AwwwardsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/483999103_1069137451899606_7114671614680677285_n.png"      // change to your image path
            alt="Awwwards judge"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.content}>

          <h2 className={styles.title}>
          Volunteering & 
          <br /> Impact
          </h2>

          <p className={styles.text}>
          Actively contributed to student initiatives, including improving digital platforms and organizing events at SLTC’s IEEE Computer Society as a former webmaster. These experiences strengthened my collaboration, design, and technical skills while giving back to the community.
          </p>
        </div>
      </div>
    </section>
  );
}
