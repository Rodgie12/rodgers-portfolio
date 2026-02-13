import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // track success/error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_sibzbwr",
        "template_bj9pjfk",
        form.current,
        "OIeG8CEAvQ4dEbtaH"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>

        {/* Status Messages */}
        {status === "sending" && (
          <p className="status-message sending">Sending...</p>
        )}
        {status === "success" && (
          <p className="status-message success">Message sent successfully ✅</p>
        )}
        {status === "error" && (
          <p className="status-message error">Failed to send message ❌</p>
        )}
      </form>
    </section>
  );
}

export default Contact;
