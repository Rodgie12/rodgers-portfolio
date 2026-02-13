import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hi, I'm <span>Rodgers Ndiege</span>
          </h1>

          <TypeAnimation
            sequence={[
              "ICT Professional",
              2000,
              "Web Developer",
              2000,
              "Database Specialist",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="typing"
          />

          <p>
            I build reliable ICT solutions, manage databases, and develop
            professional web applications that solve real business problems.
          </p>

          <div className="hero-buttons">
            <a href="/Rodgers_Ndiege_CV.pdf" download className="btn">
              Download CV
            </a>

            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.img
          src={profile}
          alt="Rodgers"
          className="profile-img"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

      </div>
    </section>
  );
}

export default Hero;
