import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Work Experience
      </motion.h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Data Management Officer</h3>
            <h4>Anytime Limited | June 2025 – January 2026</h4>
            <ul>
              <li>Data entry and database management ensuring data accuracy.</li>
              <li>Invoice creation, stock management & credit note processing.</li>
              <li>Handled ETR operations and financial ICT systems.</li>
              <li>Provided ICT support and troubleshooting.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>ICT Intern</h3>
            <h4>Yetu SACCO Limited | May 2022 – July 2022</h4>
            <ul>
              <li>Filing and retrieval of official documents.</li>
              <li>Customer support and handling inquiries.</li>
              <li>Sales and marketing of SACCO products.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
