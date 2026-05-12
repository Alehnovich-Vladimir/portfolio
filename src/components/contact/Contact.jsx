import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    emailjs.init({
      publicKey: "q30z76Yq-Ia8hnw9l",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(false);
    setSending(true);

    emailjs
      .sendForm("service_bkvinbd", "template_zu8f9oc", formRef.current)
      .then(
        (result) => {
          console.log("EmailJS success:", result.text);
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log("EmailJS error:", error);
          alert("Message was not sent. Check console for details.");
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +34 654 35 01 89
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              alexvovan.dev@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              46520 Avenida Mediterraneo 2, Canet d'en Berenguer, Valencia, Spain
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always avaliable for
            freelancing if the right project comes along me.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode ? "#333" : "",
                color: darkMode ? "white" : "",
                caretColor: darkMode ? "white" : "",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              style={{
                backgroundColor: darkMode ? "#333" : "",
                color: darkMode ? "white" : "",
                caretColor: darkMode ? "white" : "",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              style={{
                backgroundColor: darkMode ? "#333" : "",
                color: darkMode ? "white" : "",
                caretColor: darkMode ? "white" : "",
              }}
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              style={{
                backgroundColor: darkMode ? "#333" : "",
                color: darkMode ? "white" : "",
                caretColor: darkMode ? "white" : "",
              }}
              rows="5"
              placeholder="Message"
              name="message"
              required
            />
            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Submit"}
            </button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;