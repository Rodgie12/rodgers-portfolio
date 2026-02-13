import { motion } from "framer-motion";
import { FaDatabase, FaCode, FaTools, FaUserCheck } from "react-icons/fa";

function Skills() {
  return (
    <section id="skills">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      <div className="skills-container">

        <div className="skill-card">
          <FaCode className="skill-icon" />
          <h3>Technical Skills</h3>
          <ul>
            <li>HTML & CSS</li>
            <li>PHP Programming</li>
            <li>MySQL Database Management</li>
            <li>Reactjs</li>
            <li>Java Script</li>
            <li>Software Development Fundamentals</li>
          </ul>
        </div>

        <div className="skill-card">
          <FaDatabase className="skill-icon" />
          <h3>ICT & Systems</h3>
          <ul>
            <li>Computer Hardware Maintenance</li>
            <li>System Installation & Configuration</li>
            <li>ICT Support & Troubleshooting</li>
            <li>Microsoft Office</li>
          </ul>
        </div>

        <div className="skill-card">
          <FaTools className="skill-icon" />
          <h3>Tools</h3>
          <ul>
            <li>VS Code</li>
            <li>MySQL</li>
            <li>Android Studio</li>
            <li>Webinar</li>
            <li>Node.js (Basic)</li>
            <li>React (Basic)</li>
            <li>phpMyAdmin</li>
            <li>Git & GitHub</li>
            <li>XAMPP</li>
             <li>Microsoft Office Suite (Word, Excel, PowerPoint)</li>
  <li>Google Workspace Tools</li>
  <li>Chrome DevTools</li>
  <li>InfinityFree / cPanel Hosting</li>
          </ul>
        </div>

        <div className="skill-card">
          <FaUserCheck className="skill-icon" />
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem-Solving</li>
            <li>Analytical Thinking</li>
            <li>Team Collaboration</li>
            <li>Integrity & Accountability</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
