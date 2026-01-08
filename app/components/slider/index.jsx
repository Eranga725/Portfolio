"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";

const slider1 = [
  { color: "#e3e5e7", type: "image", src: "/images/Screenshot 2025-10-13 011657.png" },
  { color: "#d6d7dc", type: "video", src: "/videos/Screen Recording 2026-01-09 020321.mp4"  },
  { color: "#e3e3e3", type: "image", src: "/images/macbook-16-pro-mockup-on-concrete-background-front-view.png" },
  { color: "#21242b", type: "video", src: "/videos/Recording 2026-01-09 020938.mp4" },
];

const slider2 = [
  { color: "#d4e3ec", type: "video", src: "/videos/Screen Recording 2026-01-09 013612.mp4" },
  { color: "#e5e0e1", type: "image", src: "/images/Screenshot 2025-10-27 154751.png" },
  { color: "#d7d4cf", type: "video", src: "/videos/Recording 2026-01-09 021551.mp4" },
  { color: "#e1dad6", type: "image", src: "/images/Screenshot 2026-01-09 023428.png" },
];

export default function SLIDER() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  const renderMedia = (project) => {
    if (project.type === "video") {
      return (
        <video
          src={project.src}
          autoPlay
          muted
          loop
          playsInline
          className={styles.media}
        />
      );
    }

    return <Image fill alt="media" src={project.src} />;
  };

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              {renderMedia(project)}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              {renderMedia(project)}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
