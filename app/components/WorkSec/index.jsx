"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Project from "./components_projects";
import Modal from "./components_modal";

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const projects = [
    {
      title: "Tesbious",
      category: "Development",
      client: "TWICE",
      location: "Spain",
      services: "Interaction & Development",
      year: "2024",
      src: "/images/Screenshot 2025-12-12 224938.png",
      url: "https://www.tesbious.com/",
    },
    {
      title: "Sasa Portfolio",
      category: "Design",
      client: "Sasa",
      location: "UK",
      services: "UX/UI",
      year: "2024",
      src: "/images/Screenshot 2025-12-12 224807.png",
      url: "https://google.com",
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
      <h1 className={styles.heroTitle}>
        Creating next level
        <br />
        digital products
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

      {/* 🔥 Shared wrapper — everything aligns */}
      <div className={styles.contentWrap}>
        <div className={styles.tableHeader}>
          <p>Client</p>
          <p>Location</p>
          <p>Services</p>
          <p>Year</p>
        </div>

        {filteredProjects.map((project, i) => (
          <Project
            key={i}
            index={i}
            title={project.title}
            description={project.services}
            src={project.src}
            setModal={setModal}
            url={project.url}
          >
            <div className={styles.row}>
              <p>{project.client}</p>
              <p>{project.location}</p>
              <p>{project.services}</p>
              <p>{project.year}</p>
            </div>
          </Project>
        ))}
      </div>

      <Modal modal={modal} projects={projects} />
    </main>
  );
}
