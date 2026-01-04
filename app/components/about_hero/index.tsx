"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./style.module.css";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className={styles.hero}>
      {/* Left content */}
      <div className={styles.content}>
      <p className={styles.text}>
      Hi, I’m Hansana Eranga.
      A data science student passionate about UI/UX, full-stack development,
      and building AI-driven solutions.
      </p>

      <p className={styles.subText}>
        Design • Development • Data • AI
      </p>

      </div>

      {/* Right image with parallax */}
      <div className={styles.imageWrapper}>
        <motion.div style={{ y }} className={styles.imageInner}>
          <Image
            src="/images/Generated Image October 19, 2025 - 5_17PM.png"
            alt="City portrait"
            fill
            priority
            className={styles.image}
          />
        </motion.div>
      </div>
    </section>
  );
}
