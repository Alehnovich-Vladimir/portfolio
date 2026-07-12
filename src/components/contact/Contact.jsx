import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LanguageContext, ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const theme = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);
  const darkMode = theme.state.darkMode;
  const contact = t.contact;

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
          alert(contact.error);
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <p className="c-kicker">{contact.kicker}</p>
          <h1 className="c-title">{contact.title}</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <span>+34 654 35 01 89</span>
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              <a className="c-email" href="mailto:alexvovan.dev@gmail.com">
                alexvovan.dev@gmail.com
              </a>
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              <span>Canet d'en Berenguer, Valencia, Spain</span>
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>{contact.descriptionLead}</b> {contact.description}
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode ? "#333" : "",
                color: darkMode ? "white" : "",
                caretColor: darkMode ? "white" : "",
              }}
              type="text"
              placeholder={contact.placeholders.name}
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
              placeholder={contact.placeholders.subject}
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
              placeholder={contact.placeholders.email}
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
              placeholder={contact.placeholders.message}
              name="message"
              required
            />
            <button type="submit" disabled={sending}>
              {sending ? contact.sending : contact.submit}
            </button>
            {done && contact.success}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
