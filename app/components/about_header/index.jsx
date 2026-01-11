"use client";

import Link from "next/link"
import Image from "next/image";
import styles from "./style.module.css"
import Rounded from "../common/RoundedButton"
import { useRef } from "react"
import { useScroll, motion, useTransform } from "framer-motion"


export default function Home() {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end end"],
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])


  return (
    <main className={styles.main}>

      <div className={styles.container}>
        <div className={styles.headerWrap}>
          <h1 className={styles.heroTitle}>
          Designing and developing data-driven digital solutions
          </h1>
        </div>
        </div>

        <motion.div id="contact" style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          
 
          <motion.div style={{ x }} className={styles.buttonContainer}>
          <Link href="https://drive.google.com/file/d/1Br0QZRL_1ULVnipkCiBbfYxYBq8sv09b/view?usp=sharing" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
              <p>Resume</p>
            </Rounded>
            </Link>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </motion.svg>
        </div>
  
      </div>
    </motion.div>
    <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>

    </main>
  );
}
