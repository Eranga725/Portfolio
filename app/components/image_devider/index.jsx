"use client";

import Image from "next/image";
import styles from "./style.module.css";

export default function AwwwardsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/Screenshot 2025-12-12 224938.png"      // change to your image path
            alt="Awwwards judge"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.content}>

          <h2 className={styles.title}>
            Awwwards <br /> judge '19–25
          </h2>

          <p className={styles.text}>
            I am a proud member of the Awwwards International Jury, where I judge
            the best websites in the world using my expertise as a designer and
            developer. Micro animations and transitions have my full attention
            and get me thrilled with every move.
          </p>
        </div>
      </div>
    </section>
  );
}
