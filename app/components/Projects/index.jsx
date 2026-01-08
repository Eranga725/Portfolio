"use client"
import styles from "./page.module.css"
import { useState } from "react"
import Project from "./components_projects"
import Modal from "./components_modal"
import RoundedButton from "../common/RoundedButton"
import Link from "next/link"


const projects = [
  {
    title: "Stock tracker web-app",
    src: "/images/Screenshot 2026-01-08 175154.png",
    color: "#000000",
    url: "https://github.com/Eranga725/Stock-tracker_app",
    description: "Design & Development",
  },
  {
    title: "AI Career Guidance",
    src: "/images/Rectangle 1.jpg",
    color: "#22293b",
    url: "https://github.com/Eranga725/AI-career-guidance-system",
    description: "AI/Ml & Development",
  },
  {
    title: "LethalBot Robotic Competion 2025",
    src: "/images/Screenshot 2026-01-08 203313.png",
    color: "#0a0b0f",
    url: "https://github.com/Eranga725/LethalBot-Robotic-Competion-2025",
    description: "Design & Development",
  },
  {
    title: "Tesbious",
    src: "/images/Screenshot 2025-12-12 224938.png",
    color: "#706D63",
    url: "https://www.behance.net/gallery/241564379/Tesbious-Global-Solutions-Website-UIUX",
    description: "UI/UX Design",
  },
]

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 })

  return (
    <main className={styles.main}>

      <div className={styles.header}>
      <p className={styles.headerLabel}>RECENT WORK</p></div>
      <div className={styles.body}>
        {projects.map((project, i) => (
          <Project
            key={i}
            index={i}
            title={project.title}
            description={project.description}
            src={project.src}
            setModal={setModal}
          />
        ))}

        <div className={styles.moreWorkButton}>
          <Link href="/work" style={{ textDecoration: 'none', color: 'inherit' }}>
          <RoundedButton>
            <p>More work</p>
          </RoundedButton>
          </Link>  
        </div>
        
      </div>

      <Modal modal={modal} projects={projects} />
    </main>
  )
}