import { useContext } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";
import MobileApps from "./components/mobileApps/MobileApps";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className={`app ${darkMode ? "app--dark" : "app--light"}`}
      style={{
        color: darkMode ? "white" : "#15171a",
      }}
    >
      <Toggle />
      <LanguageSwitcher />
      <Intro />
      <About />
      <MobileApps />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
