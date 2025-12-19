"use client"
import styles from "./page.module.css"
import { useState } from "react"
import Project from "./components_projects"
import Modal from "./components_modal"
import RoundedButton from "../common/RoundedButton"

const projects = [
  {
    title: "Tesbious",
    src: "/images/Screenshot 2025-12-12 224938.png",
    color: "#000000",
    url: "https://www.tesbious.com/",
    description: "Design & Development",
  },
  {
    title: "sasa portfolio",
    src: "/images/Screenshot 2025-12-12 224807.png",
    color: "#8C8C8C",
    url: "https://google.com",
    description: "UI/UX Portfolio",
  },
  {
    title: "stock market app",
    src: "/images/locomotive.png",
    color: "#EFE8D3",
    url: "/stock-market-app",
    description: "Finance App",
  },
  {
    title: "wedd ui",
    src: "/images/silencio.png",
    color: "#706D63",
    url: "/wedd-ui",
    description: "Wedding UI Design",
  },
]

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 })

  return (
    <main className={styles.main}>
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
          <RoundedButton>
            <p>More work</p>
          </RoundedButton>
        </div>
      </div>

      <Modal modal={modal} projects={projects} />
    </main>
  )
}
