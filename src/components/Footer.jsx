import React from "react";

const Footer = () => {
  return (
    <div className="Footer container">
      <hr class="my-3" />

      <section class="p-3 m-3">
        <div class="row d-flex align-items-center">
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-center ps-5">
            <ul class="list-inline " id="list-footer">
              <li class="list-inline-item" id="list-footer">
                <a class="nav-link active" href="#techstack">
                  Tech Stack
                </a>
              </li>
              <li class="list-inline-item mx-5">
                <a class="nav-link active" href="#projects">
                  Projects
                </a>
              </li>
              <li class="list-inline-item">
                <a class="nav-link active" href="#aboutme">
                  About me
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-5 col-lg-8 ml-lg-0 text-center text-md-end">
            <p>
              Designed and built by
              <span className="gradient"> Andreea Csecs</span> with
              <span className="gradient"> love</span> &
              <span className="gradient"> passion</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
