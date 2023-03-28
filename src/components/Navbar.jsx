import React from "react";
import logoGithub from "./images/github.png";
import logoLinkedin from "./images/linkedin.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav
        class="navbar navbar-expand-lg navbar-light m-2 px-5"
        id="nav"
        style={{ backgroundColor: "white" }}
      >
        <div class="container-fluid" id="text-navbar">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto">
              <li class="nav-item" id="text-navbar">
                <a
                  class="nav-link active mx-2"
                  aria-current="page"
                  href="#techstack"
                >
                  Tech Stack
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active mx-2" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active mx-2" href="#aboutme">
                  About me
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active mx-2" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            <span class="navbar-item me-2">
              <a
                class="nav-link"
                href="https://github.com/AndreeaCsecs"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logoGithub} alt="" id="github-linkedin" />
              </a>
            </span>
            <span class="navbar-item me-2">
              <a
                class="nav-link"
                href="https://www.linkedin.com/in/andreea-csecs"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logoLinkedin} alt="" id="github-linkedin" />
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
