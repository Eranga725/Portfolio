'use client';
import styles from './page.module.css';
import { useState } from 'react';
import Project from './components_projects';
import Modal from './components_modal';

const projects = [
  {
    title: "Tesbious",
    src: "./public/images/background.jpg",
    color: "#000000",
    url: "https://www.tesbious.com/",
    description: "Design & Development"
  },
  {
    title: "sasa portfolio",
    src: "officestudio.png",
    color: "#8C8C8C",
    url: "",
    description: "UI/UX Portfolio"
  },
  {
    title: "stock market app",
    src: "locomotive.png",
    color: "#EFE8D3",
    url: "/stock-market-app",
    description: "Finance App"
  },
  {
    title: "wedd ui",
    src: "silencio.png",
    color: "#706D63",
    url: "/wedd-ui",
    description: "Wedding UI Design"
  }
];

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            description={project.description} // pass description
            setModal={setModal}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
