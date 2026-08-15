import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <button
      className={`t ${darkMode ? "is-dark" : "is-light"}`}
      type="button"
      onClick={handleClick}
      aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={darkMode}
    >
      <span className="t-option t-option--sun" aria-hidden="true">
        <img src={Sun} alt="" className="t-icon" />
      </span>
      <span className="t-option t-option--moon" aria-hidden="true">
        <img src={Moon} alt="" className="t-icon" />
      </span>
    </button>
  );
};

export default Toggle;
