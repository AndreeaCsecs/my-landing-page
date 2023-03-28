import React from "react";
import picture from "./images/profilepic.png";

const About = () => {
  return (
    <div className="About container" id="aboutme">
      <br></br>
      <br></br>
      <p className="fw-bold pt-5 text-center">About me</p>
      <div class="card border-light m-5 mb-1">
        <div class="row m-4">
          <div class="col-4">
            <img src={picture} alt="" className="img-fluid my-5" />
          </div>

          <div class="col-8">
            <div class="card-body my-5 mx-2" id="text-color">
              <p class="card-title">
                <p className="fw-bold" id="description">
                  I'm <span className="gradient">Andreea </span>
                  <span>&#128075;</span> a self sarter
                  <span className="gradient"> polyglot</span> student. I'm
                  actively learning
                  <span class="gradient"> frontend development</span> and I
                  speak
                  <span className="gradient"> 4 languages </span>
                  fluently.
                </p>
              </p>
              <p class="card-text " id="skills">
                <span className="fw-bold">About my skills:</span>
                <ul className="list-unstyled">
                  <li>
                    <span>&#128304;</span> React, JavaScript, Typescript,
                    Bootsrap, HTML, CSS
                  </li>
                  <li>🇬🇧 English 🇩🇪 German 🇷🇴 Romanian 🇭🇺 Hungarian</li>
                </ul>
              </p>
              <p className="card-text" id="skills">
                <span className="fw-bold">I'm currently learning:</span>
                <ul className="list-unstyled">
                  <li>
                    <span>&#128304;</span> Node.js, J.Querry, Vue.js
                  </li>
                  <li>🇮🇹 Italian</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default About;
