import React, { useState } from "react";

import FormModal from "./FormModal";

import "../index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="contacts-container">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nicholas-aguirre-a23a0616a/"
          className="contactLink"
        >
          <FontAwesomeIcon icon={faLinkedin} id="linkedInIcon" />
          <br />
          <p className="iconSubtitle">LinkedIn</p>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/HeyNeek"
          className="contactLink"
        >
          <FontAwesomeIcon icon={faGithub} id="githubIcon" />
          <br />
          <p className="iconSubtitle">GitHub</p>
        </a>

        <div>
          <FontAwesomeIcon
            onClick={() => setModalShow(true)}
            icon={faEnvelope}
            id="emailIcon"
          />
          <br />
          <p onClick={() => setModalShow(true)} className="iconSubtitle">
            Email
          </p>
        </div>
      </div>
      <FormModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Contact;
