import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useLanguage } from "../context/LanguageContext";

export const ContactPage = () => {

    const { translation } = useLanguage()

    return (
        <div id="contact-page">
            <h2>{translation.contact.title}</h2>
            <p>{translation.contact.description} </p>
            <div className="contact-options">
                <a
                    className="contact-option"
                    href="https://github.com/21fernandinhow"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    className="contact-option"
                    href="https://www.linkedin.com/in/fernando-carvalho-6005b024b/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    className="contact-option"
                    href="mailto:21fernandinhow@gmail.com"
                >
                    <IoMail />
                </a>
            </div>
        </div>
    )

}