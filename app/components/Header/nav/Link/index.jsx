"use client"

import styles from "./style.module.scss"
import Link from "next/link"
import { motion } from "framer-motion"
import { slide, scale } from "../../animation"

export default function Index({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data

  const handleClick = () => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setSelectedIndicator(href)
  }

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href)
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
      {href.startsWith("#") ? <a onClick={handleClick}>{title}</a> : <Link href={href}>{title}</Link>}
    </motion.div>
  )
}
