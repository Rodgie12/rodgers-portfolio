import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className="projects-container">

        {/* Health Information System */}
        <div className="project-card">
          <h3>Health Information System</h3>
          <p>
            A client management system built with PHP and MySQL that allows 
            registration, photo uploads, program enrollment, and API-based 
            client data access.
          </p>

          <div className="tech-stack">
            PHP | MySQL | HTML | CSS | JavaScript
          </div>

          <div className="project-buttons">
            <a 
              href="https://github.com/Rodgie12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
            >
              View Code
            </a>
          </div>
        </div>

        {/* Pharmacy POS */}
        <div className="project-card">
          <h3>Pharmacy POS System</h3>
          <p>
            A web-based pharmacy point-of-sale system with user authentication, 
            sales tracking, invoice management, and database integration.
          </p>

          <div className="tech-stack">
            PHP | MySQL | HTML | CSS
          </div>

          <div className="project-buttons">
            <a 
              href="https://pharmacypos.infinityfreeapp.com/dashboard/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* DJ Rodgie Website */}
        <div className="project-card">
          <h3>DJ Rodgie Website</h3>
          <p>
            A dynamic website showcasing front-end and back-end integration, 
            deployed on InfinityFree hosting platform.
          </p>

          <div className="tech-stack">
            HTML | CSS | PHP
          </div>

          <div className="project-buttons">
            <a 
              href="https://djrodgie.infinityfreeapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
