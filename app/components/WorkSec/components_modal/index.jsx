'use client';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.css';
import gsap from 'gsap';

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] }
  }
};

export default function Modal({ modal, projects }) {
  const { active, index } = modal;

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
    const xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });

    const moveHandler = (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  // 💥 FINAL BUG-FIXED NAVIGATION FUNCTION
  const navigateToProject = () => {
    const url = projects[index]?.url;

    if (!url || url === "") return;

    if (url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.assign(url);
    }
  };

  return (
    <>
      {/* MAIN MODAL CLICK — WORKS NOW */}
      <motion.div
        ref={modalContainer}
        className={styles.modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        onClick={navigateToProject}
        style={{ pointerEvents: active ? "auto" : "none", cursor: "pointer" }}
      >
        <div
          style={{ top: index * -100 + "%" }}
          className={styles.modalSlider}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className={styles.modal}
              style={{ backgroundColor: project.color }}
            >
              <Image
                src={project.src}
                alt={project.title}
                width={300}
                height={200}
                priority
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* CURSOR */}
      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />

      {/* VIEW BUTTON — ALSO WORKS NOW */}
      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        onClick={(e) => {
          e.stopPropagation(); // avoid modal double fire
          navigateToProject();
        }}
        style={{ cursor: "pointer" }}
      >
        View
      </motion.div>
    </>
  );
}
