import "./about.css";
import Award from "../../img/award.jpg";

const About = () => {
  return (
      <div className="a">
          <div className="a-left">
              <div className="a-card bg"></div>
              <div className="a-card">
                  <img src="https://i.ibb.co/Rj74kKY/2020-10-08-10-09-27.jpg"
                      alt=""
                      className="a-img"
                  />
              </div>
          </div>
          <div className="a-right">
              <h1 className="a-title">About Me</h1>
              <p className="a-sub">
                  It is a long established fact that a reader will be able to read and
                  readable content.
              </p>
              <p className="a-desc">
              I'm an aspiring front-end developer with experience developing responsive websites, and I'm ready to get new technologies for my work stack. At the moment, I`ve completed the course
              of a front-end developer for developing myself in IT company. Every day I improve my skills and expand them learning new technologies. Why Front-end? Because I’m used to seeing the result
              of my work… Hard-working, with great sense of responsibility and humor.
              </p>
              <div className="a-award">
                 <img src={Award} alt="" className="a-award-img" />
                  <div className="a-award-texts">
                      <h4 className="a-award-title">IT school TeachMeSkills - Frontend developer course:</h4>
                      <p className="a-award-desc">School teaching TeachMeSkills it was the best time of my life.
                          Many thanks to my teachers and colleagues for being with me throughout the entire training.</p>
                  </div> 
              </div>
          </div>
      </div>
  )
}

export default About