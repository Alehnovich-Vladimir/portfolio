import { useContext } from "react";
import { LanguageContext } from "../../context";
import "./about.css";
import Award from "../../img/award.jpg";

const About = () => {
  const { t } = useContext(LanguageContext);
  const about = t.about;

  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.ibb.co/Rj74kKY/2020-10-08-10-09-27.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">{about.title}</h1>
        <p className="a-sub">{about.subtitle}</p>
        <p className="a-desc">{about.description}</p>
        <div className="a-focus">
          <span>React</span>
          <span>Android</span>
          <span>Mobile UX</span>
          <span>Vercel</span>
          <span>Google Play</span>
        </div>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">{about.awardTitle}</h4>
            <p className="a-award-desc">{about.awardDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
