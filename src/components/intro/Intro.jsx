import { useContext } from "react";
import { LanguageContext } from "../../context";
import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  const { t } = useContext(LanguageContext);
  const intro = t.intro;

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <div className="i-kicker">{intro.kicker}</div>
          <h2 className="i-intro">{intro.greeting}</h2>
          <h1 className="i-name">{intro.name}</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              {intro.titleItems.map((item) => (
                <div className="i-title-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="i-desc">{intro.description}</p>
          <div className="i-actions">
            <a className="i-action primary" href="#apps">
              {intro.appsButton}
            </a>
            <a className="i-action" href="#projects">
              {intro.projectsButton}
            </a>
          </div>
          <div className="i-stats" aria-label={intro.highlightsLabel}>
            {intro.stats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <div className="i-floating-card one">
          <span>{intro.floatingGoogle}</span>
          <strong>My Route</strong>
        </div>
        <div className="i-floating-card two">
          <span>{intro.floatingBuilding}</span>
          <strong>My PhotoBook</strong>
        </div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
