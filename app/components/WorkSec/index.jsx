"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Project from "./components_projects";
import Modal from "./components_modal";

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const projects = [
    {
      title: "Stock tracker web-app",
      category: "Development",
      client: "Stock tracker app",
      location: "Web / Ai",
      services: "Design & Development",
      year: "2025",
      src: "/images/Screenshot 2026-01-08 175154.png",
      url: "https://github.com/Eranga725/Stock-tracker_app",
    },

    {
      title: "AI Career Guidance",
      category: "Development",
      client: "AI Career Guidance",
      location: "Ai/Ml Web",
      services: "Development",
      year: "2024",
      src: "/images/Rectangle 1.jpg",
      url: "https://github.com/Eranga725/AI-career-guidance-system",
    },
    {
      title: "LethalBot Robotic Competion",
      category: "Development",
      client: "LethalBot Robotic Competion",
      location: "Web UI",
      services: "Design & Development",
      year: "2025",
      src: "/images/Screenshot 2026-01-08 203313.png",
      url: "https://github.com/Eranga725/LethalBot-Robotic-Competion-2025",
    },
    
    {
      title: "Tesbious",
      category: "Design",
      client: "Tesbious",
      location: "Design",
      services: "Design & UI/UX",
      year: "2025",
      src: "/images/Screenshot 2025-12-12 224938.png",
      url: "https://www.behance.net/gallery/241564379/Tesbious-Global-Solutions-Website-UIUX",
    },
    {
      title: "Smart fan controlling system",
      category: "Development",
      client: "Smart fan controlling system",
      location: "Ai/ML",
      services: "Deep learning & Ml",
      year: "2025",
      src: "/images/Screenshot 2026-01-08 211443.png",
      url: "https://github.com/Eranga725/Smart-fan-controlling-system",
    },
    {
      title: "Portfolio",
      category: "Design",
      client: "Tesbious",
      location: "Design",
      services: "Design & UI/UX",
      year: "2025",
      src: "/images/Screenshot 2025-12-12 224807.png",
      url: "https://www.behance.net/gallery/241750665/Modern-Developer-Portfolio-Website",
    },
  ];


  const filters = ["All", "Design", "Development"];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className={styles.main}>

      {/* ⭐ SHARED CONTAINER FOR PERFECT ALIGNMENT ⭐ */}
      <div className={styles.container}>
        <div className={styles.headerWrap}>
          <h1 className={styles.heroTitle}>
          Creating impactful 
            <br />
            digital solutions
          </h1>

          <div className={styles.filters}>
            {filters.map((f) => (
              <button
                key={f}
                className={`${styles.chip} ${
                  activeFilter === f ? styles.activeChip : ""
                }`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* TABLE CONTENT */}
        <div className={styles.contentWrap}>
          <div className={styles.tableHeader}>
            <p>Project name</p>
            <p>Expertise</p>
            <p>Tech Stack</p>
            <p>Year</p>
          </div>

          {filteredProjects.map((project, i) => (
            <Project
              key={i}
              index={i}
              title={project.title}
              location={project.location}
              description={project.services}
              year={project.year}
              src={project.src}
              setModal={setModal}
              url={project.url}
            />
          ))}
        </div>
      </div>

      <Modal modal={modal} projects={projects} />
    </main>
  );
}
