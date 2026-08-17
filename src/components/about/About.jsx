import { useContext } from "react";
import { LanguageContext } from "../../context";
import "./about.css";
import Award from "../../img/award.jpg";

const About = () => {
  const { t } = useContext(LanguageContext);
  const about = t.about;

  return (
    <section className="a" id="about">
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
        <div className="a-stack">
          {about.skillGroups.map((group) => (
            <div className="a-stack-group" key={group.label}>
              <span className="a-stack-label">{group.label}</span>
              <div className="a-focus">
                {group.items.map((skill) => {
                  const techClass = skill
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");

                  return (
                    <span className={`a-tech a-tech--${techClass}`} key={skill}>
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="a-award">
          <div className="a-award-media"><img src={Award} alt="" className="a-award-img" /></div>
          <div className="a-award-texts">
            <h4 className="a-award-title">{about.awardTitle}</h4>
            <p className="a-award-desc">{about.awardDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
