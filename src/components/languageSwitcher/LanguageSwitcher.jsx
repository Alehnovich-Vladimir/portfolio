import { useContext } from "react";
import { LanguageContext } from "../../context";
import "./languageSwitcher.css";

const LanguageSwitcher = () => {
  const { language, setLanguage, t, languages } = useContext(LanguageContext);

  return (
    <div className="lang-switch" aria-label="Language selector">
      {languages.map((item) => (
        <button
          className={language === item ? "active" : ""}
          key={item}
          type="button"
          aria-label={translationsLabel(t, item)}
          aria-pressed={language === item}
          onClick={() => setLanguage(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

const translationsLabel = (t, item) => {
  const labels = {
    en: "English",
    es: "Español",
    ru: "Русский",
  };

  return `${t.languageName}: ${labels[item]}`;
};

export default LanguageSwitcher;
