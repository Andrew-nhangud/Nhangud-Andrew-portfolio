import "./Contact.css";
import githubIcon from "../../assets/images/github.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";

export const Contact = () => {
  return (
    <section id="contact">
      <p className="section-header">RESERVATIONS & CONTACT</p>
      <p className="contact-message">Interested in working together?</p>
      <p className="gmail">Andrewnhangud3785@gmail.com</p>

      <div className="contact-icons">
        <a href="https://github.com/Andrew-nhangud?tab=repositories">
          <img src={githubIcon} alt="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/andrew-nhangud-149219352/">
          <img src={linkedinIcon} alt="linkedin icon" />
        </a>
      </div>

      <div className="divider">
        <div className="line"></div>
        <div className="box"></div>
        <div className="line"> </div>
      </div>

      <p className="copy-rights">
        &copy; 2026 Andrew Nhangud. All rights reserved.
      </p>

      <div className="section-end"></div>
    </section>
  );
};
