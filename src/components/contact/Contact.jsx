import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LanguageContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const { t } = useContext(LanguageContext);
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

      <div className="c-cta">
        <div className="c-cta-copy">
          <p className="c-cta-kicker">{contact.cta.kicker}</p>
          <h2 className="c-cta-title">{contact.cta.title}</h2>
          <p className="c-cta-desc">{contact.cta.description}</p>
        </div>

        <div className="c-cta-services" aria-label={contact.cta.servicesLabel}>
          {contact.cta.services.map((service, index) => (
            <div className="c-cta-service" key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{service}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="c-wrapper" id="contact-form">
        <div className="c-left">
          <p className="c-kicker">{contact.kicker}</p>
          <h1 className="c-title">{contact.title}</h1>
          <div className="c-info">
            <div className="c-info-item c-info-item--phone">
              <span className="c-icon-shell">
                <img src={Phone} alt="" className="c-icon" />
              </span>
              <span>+34 654 35 01 89</span>
            </div>
            <div className="c-info-item c-info-item--email">
              <span className="c-icon-shell">
                <img src={Email} alt="" className="c-icon" />
              </span>
              <a className="c-email" href="mailto:alexvovan.dev@gmail.com">
                alexvovan.dev@gmail.com
              </a>
            </div>
            <div className="c-info-item c-info-item--address">
              <span className="c-icon-shell">
                <img src={Address} alt="" className="c-icon" />
              </span>
              <span>Canet d'en Berenguer, Valencia, Spain</span>
            </div>
          </div>
        </div>

        <div className="c-right">
          <div className="c-form-accent" aria-hidden="true"></div>
          <p className="c-desc">
            <b>{contact.descriptionLead}</b> {contact.description}
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={contact.placeholders.name}
              name="user_name"
              required
            />
            <input
              type="text"
              placeholder={contact.placeholders.subject}
              name="user_subject"
              required
            />
            <input
              className="c-email-field"
              type="email"
              placeholder={contact.placeholders.email}
              name="user_email"
              required
            />
            <textarea
              rows="5"
              placeholder={contact.placeholders.message}
              name="message"
              required
            />
            <button type="submit" disabled={sending}>
              {sending ? contact.sending : contact.submit}
              <span aria-hidden="true">↗</span>
            </button>
            {done && <span className="c-success">{contact.success}</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
