'use client';

import React, { useRef, useState } from "react";
import styles from "./style/page.module.css";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null); 

  const scrollToSection = (ref: any) => {
    if(ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  };

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
        <div className={styles.logo}>Shintaro.Endo</div>
        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a onClick={() => scrollToSection(aboutRef)}>About</a></li>
          <li><a onClick={() => scrollToSection(projectsRef)}>Projects</a></li>
        </ul>
        </div>
      </nav>

      {/* Main Section */}
      <motion.div 
        className={styles.mainContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="/profile.jpg" alt="Profile" className={styles.profileImage} />
        <h1 className={styles.helloWorld}>Hello, World!</h1>
      </motion.div>

      {/* About Section */}
      <section ref={aboutRef} className={styles.aboutSection}>
        <h2>About Me</h2>
        <p>I am a System Engineer currently working in Japan.<br/> 
        Our company develops software that promotes digital transformation (DX) through AI and data integration.
        </p>
        
        {/* スキル一覧 */}
        <div className={styles.skillsContainer}>
          <h3>Main Skills</h3>
          <ul className={styles.skillsList}>
            <li>Python</li>
            <li>AWS</li>
            <li>TypeScript</li>
            <li>Next.js</li>
          </ul>
        </div>

        {/* 興味・キャリア目標 */}
        <div className={styles.interestsContainer}>
          <h3>Interests</h3>
           <p>I am currently interested in the fields of AI and fintech, and in the future, I aspire to be involved in large-scale development using these technologies.
           I am also highly interested in a global environment, and I am studying English and programming intensively every day.</p>
  </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className={styles.projectsSection}>
        <h2>My Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <h3>Project 1</h3>
            <p>GenAI Log Analyzer</p>
            <p>Tech Stack: Next.js + Lambda + Glue + Athena</p>
            <p>Description: A log analysis tool for generative AI interactions. It visualizes user behavior, analyzes sentiment trends, 
              and provides insights into prompt efficiency using AWS Glue and Athena. </p>
            <a href="https://github.com/endo0911engineer/log-analysis"target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div className={styles.projectCard}>
            <h3>Project 2</h3>
            <p>AI Debate Hub</p>
            <p>Tech Stack: Next.js + Django</p>
            <p>Description: A discussion platform utilizing LLMs to facilitate structured debates and brainstorming sessions. 
              The AI summarizes arguments, suggests counterpoints, and enhances collaborative thinking.</p>
            <a href="https://github.com/endo0911engineer/llm-discuss-helper"target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div className={styles.projectCard}>
            <h3>Project 3</h3>
            <p>MindTrack AI</p>
            <p>Tech Stack: Next.js + Go + fastAPI</p>
            <p>Descriptions: An AI-powered journaling app that monitors mental health. It analyzes daily entries using NLP models to detect mood patterns 
            and offers personalized well-being insights.</p>
            <a href="https://github.com/endo0911engineer/mental_health_app" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className={styles.projectCard}>
            <h3>Project 4</h3>
            <p>NFT GiftX</p>
            <p>Tech Stack: Next.js + Django</p>
            <p>Descrition: A blockchain-based gifting platform that allows users to send NFTs as personalized gifts. Supports wallet integration
              and seamless minting for unique digital presents.</p>
            <a href="https://github.com/endo0911engineer/nftapp" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className={styles.projectCard}>
            <h3>Project 5</h3>
            <p>Drone Epidemic Simulator</p>          <p>Description: </p>
            <p>Tech Stack: C++</p>
            <p>Description: A simulation program for epidemic communication via drones.
            It models the spread of communication when virtual aerial pathways are created in a simulated disaster scenario.</p>
            <a href="https://github.com/endo0911engineer/Drone-communication-Wooden-structure-" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
}
