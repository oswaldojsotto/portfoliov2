"use client";
import styles from "./page.module.css";
// import Project from "../components/project";
import Proyecto from "./proyecto";

export default function Home() {
  const projects = [
    {
      title1: "Jomor",
      title2: "Design",
      src: "jomor_design.jpeg",
    },
    {
      title1: "La",
      title2: "Grange",
      src: "la_grange.jpeg",
    },
    {
      title1: "Deux Huit",
      title2: "Huit",
      src: "deux_huit_huit.jpeg",
    },
    {
      title1: "Nothing",
      title2: "Design Studio",
      src: "nothing_design_studio.png",
    },
    {
      title1: "Mambo",
      title2: "Mambo",
      src: "mambo_mambo.jpeg",
    },
  ];

  return (
    <main className={styles.main}>
      <div className={`${styles.gallery}`}>
        <p>Featured Work</p>
        {projects.map(project => {
          return <Proyecto project={project} key={project.src} />;
        })}
      </div>
    </main>
  );
}