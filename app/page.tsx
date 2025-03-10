import React from "react";
import styles from "./page.module.css"; 

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="/profile.jpg" alt="Profile" className={styles.profileImage} />
      
      <div className={styles.introContainer}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.description}>
          I am a Software Engineer in japan. Born in 2000, I majored in Computer Science at Niigata University. My research focused on epidemic communication for drones.

Currently, I work at a company that promotes digital transformation (DX) through data utilization, where I am engaged in the development of AI-powered web systems.
        </p>
      </div>

      <div className={styles.skillsContainer}>
        <h2 className={styles.skillsTitle}>My Skills</h2>
        <ul className={styles.skillsList}>
          <li>Python</li>
          <li>AWS</li>
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>React</li>
        </ul>
      </div>

      <div className={styles.projectsContainer}>
        <h2 className={styles.projectsTitle}>My Projects</h2>
        <ul className={styles.projectsList}>
          <li><a href="https://github.com/your-github-username/project1" target="_blank" rel="noopener noreferrer">Project 1</a></li>
          <li><a href="https://github.com/your-github-username/project2" target="_blank" rel="noopener noreferrer">Project 2</a></li>
          <li><a href="https://github.com/your-github-username/project3" target="_blank" rel="noopener noreferrer">Project 3</a></li>
        </ul>
      </div>

      <div className={styles.linkContainer}>
        <a
        href="https://github.com/your-github-username"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubLink}
        >
          Visit My GitHub
        </a>

        <footer className={styles.footer}>
        <p>Follow me on Instagram: 
          <a href="https://instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
            @your-instagram-username
          </a>
        </p>
      </footer>
      </div>
    </div>
  );
}