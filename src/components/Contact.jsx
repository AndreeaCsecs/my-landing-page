import React from "react";
import logoGithub from "./images/github.png";
import logoLinkedin from "./images/linkedin.png";

const Contact = () => {
  return (
    <div className="Contact">
      <div class="container">
        <p className="fw-bold m-3 p-4 text-center" id="contact">
          Contact
        </p>
        <div class="row row-cols-2 p-5 m-3 mb-5">
          <div class="col p-3 d-flex justify-content-end">
            <span className="fs-3 me-1">&#129305; </span>
            <span className="align-self-center pe-5 me-2">
              <a href="tel:+40747874331" id="contact-link">
                +40 747 874 331
              </a>
            </span>
          </div>

          <div class="col p-3 d-flex justify-content-start">
            <span className="fs-3 me-1">&#128233; </span>
            <span className="align-self-center">
              <a href="mailto:andreeacsecs@yahoo.com" id="contact-link">
                andreeacsecs@yahoo.com
              </a>
            </span>
          </div>

          <div class="col p-3 d-flex justify-content-end ">
            <img
              src={logoLinkedin}
              alt=""
              id="github-linkedin"
              className="me-1 align-self-center"
            />
            <a
              className="align-self-center"
              id="contact-link"
              href="https://www.linkedin.com/in/andreea-csecs"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn: Andreea Csecs
            </a>
          </div>
          <div class="col p-3 d-flex justify-content-start ">
            <img
              src={logoGithub}
              alt=""
              id="github-linkedin"
              className="me-1 align-self-center"
            />
            <a
              className="align-self-center"
              id="contact-link"
              href="https://github.com/AndreeaCsecs"
              target="_blank"
              rel="noreferrer"
            >
              GitHub: Andreea Csecs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
