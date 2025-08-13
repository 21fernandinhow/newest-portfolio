import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const ContactPage = () => (
    <div id="contact-page">
        <h2>Contato:</h2>
        <p>Aqui estão as principais formas de se conectar comigo: </p>
        <div className="contact-options">
            <a
                className="contact-option"
                href="https://github.com/21fernandinhow"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub /> Github
            </a>
            <a
                className="contact-option"
                href="https://www.linkedin.com/in/fernando-carvalho-6005b024b/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin /> LinkedIn
            </a>
            <a
                className="contact-option"
                href="mailto:21fernandinhow@gmail.com"
            >
                <IoMail /> 21fernandinhow@gmail.com
            </a>
        </div>
    </div>
)