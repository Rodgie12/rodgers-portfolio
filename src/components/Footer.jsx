import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p>© 2026 Rodgers Ndiege</p>
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/rodgers-ndiege-57b89a1b0?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a 
          href="https://github.com/Rodgie12" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
