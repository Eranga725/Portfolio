"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import styles from "./style.module.scss"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { AnimatePresence } from "framer-motion"
import Nav from "./nav"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Rounded from "../common/RoundedButton"
import Magnetic from "../common/Magnetic"

export default function Header() {
  const header = useRef(null)
  const button = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()

  // 👉 Pages that have WHITE backgrounds
  const whitePages = ["/about", "/work"]
  const isWhitePage = whitePages.includes(pathname)

  // Close menu on route change
  useEffect(() => {
    const id = setTimeout(() => setIsActive(false), 0)
    return () => clearTimeout(id)
  }, [pathname])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!button.current) return

    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          })
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          })
          setIsActive(false)
        },
      },
    })
  }, [])

  return (
    <>
      <div
        ref={header}
        className={`${styles.header} ${
          isWhitePage ? styles.dark : ""
        }`}
      >
        <Link href="/" className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Hansana</p>
            <p className={styles.Hansana}>Eranga</p>
            <p className={styles.Eranga}>Jayarathna</p>
          </div>
        </Link>

        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <Link href="/work" style={{ textDecoration: 'none', color: 'inherit' }}>Work</Link>
              <div className={styles.indicator} />
            </div>
          </Magnetic>

          <Magnetic>
            <div className={styles.el}>
              <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
              <div className={styles.indicator} />
            </div>
          </Magnetic>

          <Magnetic>
            <div className={styles.el}>
              <a href="https://cal.com/hansana-eranga-tuurkf" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
              <div className={styles.indicator} />
            </div>
          </Magnetic>
        </div>
      </div>

      <div
        ref={button}
        className={`${styles.headerButtonContainer} ${
          isWhitePage ? styles.dark : ""
        }`}
      >
        <Rounded
          onClick={() => setIsActive(!isActive)}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          />
        </Rounded>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}
