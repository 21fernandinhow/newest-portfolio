import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

export const ThemeButton = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? `${localStorage.getItem('theme')}` : 'light')

    const handleTheme = (currentTheme: string) => {
        const userNewTheme = currentTheme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', userNewTheme)
        setTheme(userNewTheme)
    }

    const applyTheme = (theme: string) => {
        const isThemeDark = theme === 'dark'
        document.body.style.setProperty("--bg-color", isThemeDark ? "#1c1c1c" : "#f5f5f5");
        document.body.style.setProperty("--text-color", isThemeDark ? "#f5f5f5" : "#1c1c1c");
        document.body.style.setProperty("--secondary-text-color", isThemeDark ? "#ededed" : "#4c4c4c");
        document.body.style.setProperty("--secondary-bg-color", isThemeDark ? "#2c2c2c" : "#fff");
        document.body.style.setProperty("--invert-value", isThemeDark ? "100" : "0");
    }

    useEffect(() => {
        applyTheme(theme)
    }, [theme])

    return (
        <button onClick={() => handleTheme(theme)} aria-label="Change theme" id="theme-button">
            {theme === 'dark' ? <MdSunny className="icon" /> : <IoMdMoon className="icon" />}
        </button>
    )
}