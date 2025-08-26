import { IoChatbubblesSharp } from "react-icons/io5";
import { useLanguage } from "../context/LanguageContext";

interface FooterAIButtonProps {
    openChat: () => void
}

export const FooterAIButton = ({ openChat }: FooterAIButtonProps) => {
    const { translation } = useLanguage()
    return (
        <div id="footer-ai-button">
            <p>{translation.askVariations.needHelp}</p>
            <button className="ask-ai-button" onClick={openChat}>
                {translation.askVariations.askSamantha} <IoChatbubblesSharp />
            </button>
        </div>
    )
}


