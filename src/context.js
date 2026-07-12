import { createContext, useEffect, useReducer, useState } from "react";
import { translations } from "./translations";

export const ThemeContext = createContext();
export const LanguageContext = createContext();

const INITIAL_STATE = { darkMode: false };
const supportedLanguages = Object.keys(translations);

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

    return (
        <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
    );
};

const getInitialLanguage = () => {
    const storedLanguage = window.localStorage.getItem("portfolioLanguage");
    if (supportedLanguages.includes(storedLanguage)) {
        return storedLanguage;
    }

    const browserLanguage = window.navigator.language.slice(0, 2).toLowerCase();
    return supportedLanguages.includes(browserLanguage) ? browserLanguage : "en";
};

export const LanguageProvider = (props) => {
    const [language, setLanguage] = useState(getInitialLanguage);

    useEffect(() => {
        window.localStorage.setItem("portfolioLanguage", language);
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                t: translations[language],
                languages: supportedLanguages,
            }}
        >
            {props.children}
        </LanguageContext.Provider>
    );
};
