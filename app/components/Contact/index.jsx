"use client"

import styles from "./style.module.scss"
import Image from "next/image"
import Rounded from "../common/RoundedButton"
import { useRef, useEffect, useState } from "react"
import { useScroll, motion, useTransform } from "framer-motion"
import Magnetic from "../common/Magnetic"
import Link from "next/link"

export default function CONTACT() {
  const [currentTime, setCurrentTime] = useState("")

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, 100])
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
      setCurrentTime(`${hours}:${minutes} ${timeZone}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div id="contact" ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/background.png`} />
            </div>
            <h2>Let&apos;s work</h2>
          </span>
          <h2>together</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
          <Link href="https://cal.com/hansana-eranga-tuurkf/30min?overlayCalendar=true" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
              <p>Get in touch</p>
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
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <p>hansanaeranga2001@gmail.com</p>
          </Rounded>
          <Rounded>
            <p>+94 72 5 53 06 59</p>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2025 © Edition</p>
            </span>
            <span className={styles.localTime}>
              <h3>Local Time</h3>
              <p>{currentTime}</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>                
              <Link href="https://www.linkedin.com/in/hansana-eranga-22500123a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bsw5N%2FYdSSrCziazqaSunEA%3D%3D" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Linkedin</p>
              </Link>
              </Magnetic>
            </span>
            <Magnetic>
            <Link href="https://github.com/Eranga725" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Github</p>
              </Link>
            </Magnetic>
            <Magnetic>
            <Link href="https://www.behance.net/hansanaeranga" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Behance</p>
              </Link>
            </Magnetic>
            
            <Magnetic>
            <Link href="https://www.instagram.com/hansanaeranga/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Instagram</p>
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
