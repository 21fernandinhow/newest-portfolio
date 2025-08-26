import { IoChatbubblesSharp } from "react-icons/io5"
import { useLanguage } from "../context/LanguageContext"
import { useMessages } from "../context/MessagesContext"

interface ProjectPageProps {
    slug: string
    imgSrc: string
    title: string
    projectUrl: string
    customClass?: string
    openChat: () => void
}

export const ProjectPage = ({ slug, imgSrc, title, projectUrl, customClass = "", openChat }: ProjectPageProps) => {

    const { translation } = useLanguage()
    const { sendMessageToAI } = useMessages()

    const askAboutProject = () => {
        sendMessageToAI(translation.askVariations.askProject + title, "user")
        openChat()
    }

    return (
        <div className={`project-page ${customClass}`} id={slug}>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                <img src={imgSrc} alt={title} />
                <h2>{title}</h2>
            </a>
            <button onClick={askAboutProject} className="ask-ai-button">
                <IoChatbubblesSharp /> {translation.askVariations.ask}
            </button>
        </div>
    )
}