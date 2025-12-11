'use client';
import styles from './page.module.css'
import { useState } from 'react';
import Project from './components_projects';
import Modal from './components_modal';

const projects = [
  {
    title: "Tesbious",
    src: "c2montreal.png",
    color: "#000000"
  },
  {
    title: "sasa portfolio",
    src: "officestudio.png",
    color: "#8C8C8C"
  },
  {
    title: "stock market app",
    src: "locomotive.png",
    color: "#EFE8D3"
  },
  {
    title: "wedd ui",
    src: "silencio.png",
    color: "#706D63"
  }
]

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} key={index}/>
        })
      }
    </div>
          <Modal modal={modal} projects={projects}/>
  </main>
  )
}
