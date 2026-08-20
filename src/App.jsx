import { useContext } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";
import MobileApps from "./components/mobileApps/MobileApps";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { LanguageContext, ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`app ${darkMode ? "app--dark" : "app--light"}`}>
      <header className="site-header">
        <a
          className="site-brand"
          href="#home"
          aria-label="AlexVovan Studio — Web and Mobile Developer"
        >
          <span className="site-brand-mark" aria-hidden="true">
            <img
              className="site-brand-logo site-brand-logo--light"
              src="/brand-av-logo-light.png"
              alt=""
            />
            <img
              className="site-brand-logo site-brand-logo--dark"
              src="/brand-av-logo-dark.png"
              alt=""
            />
          </span>
          <span className="site-brand-copy">
            <strong>AlexVovan Studio</strong>
            <small>Web · Mobile Developer</small>
          </span>
        </a>

        <nav className="site-nav" aria-label={t.nav.label}>
          <a href="#home">{t.nav.home}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#apps">{t.nav.apps}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="site-controls">
          <LanguageSwitcher />
          <Toggle />
        </div>
      </header>

      <main>
        <Intro />
        <About />
        <MobileApps />
        <ProductList />
        <Contact />
      </main>
    </div>
  );
};

export default App;
