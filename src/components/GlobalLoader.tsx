import { WaitingAnimation } from "./WaitingAnimation";
import { useLanguage } from "../context/LanguageContext";

export const GlobalLoader = () => {
    const { translation } = useLanguage();

    return (
        <div className="global-loader">
            <WaitingAnimation />
            <div className="progress-text">{translation.initialLoading}</div>
        </div>
    );
};