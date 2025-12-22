"use client"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import styles from "./style.module.scss"
import { usePathname } from "next/navigation"
import { AnimatePresence } from "framer-motion"
import Nav from "./nav"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Rounded from "../common/RoundedButton"
import Magnetic from "../common/Magnetic"

export default function Header() {
  const header = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()
  const button = useRef(null)

  useEffect(() => {
    const id = setTimeout(() => setIsActive(false), 0)
    return () => clearTimeout(id)
  }, [pathname])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" })
        },
        onEnterBack: () => {
          gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" })
          setIsActive(false)
        },
      },
    })
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Hansana</p>
            <p className={styles.dennis}>Eranga</p>
            <p className={styles.snellenberg}>Jayarathna</p>
          </div>
        </div>
        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <a onClick={() => scrollToSection("work")} style={{ cursor: "pointer" }}>
                Work
              </a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a onClick={() => scrollToSection("about")} style={{ cursor: "pointer" }}>
                About
              </a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a onClick={() => scrollToSection("contact")} style={{ cursor: "pointer" }}>
                Contact
              </a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive)
          }}
          className={`${styles.button}`}
        >
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  )
}
