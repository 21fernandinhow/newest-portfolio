import { createContext, useContext, useState, type ReactNode } from "react";
import { translations } from "../translations/translations";

type Language = "pt" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    translation: typeof translations.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within LanguageProvider");
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const userLang = navigator.language || navigator.languages[0];
    const isBrazil = userLang.toLowerCase().startsWith("pt-br");
    const [language, setLanguage] = useState<Language>(isBrazil ? "pt" : "en");

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                translation: translations[language]
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};