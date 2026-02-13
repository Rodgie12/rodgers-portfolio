import { motion } from "framer-motion";

function About() {
  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <p>
        Detail-oriented ICT professional with a Bachelor’s degree in Computer 
        Information Systems and hands-on experience in data management, 
        database administration, ICT support, and web application development.
      </p>
    </section>
  );
}

export default About;
