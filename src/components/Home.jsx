import React from "react";
import picture from "./images/profilepic.png";

const Home = () => {
  return (
    <div className="Home container d-flex align-items-center">
      <div id="text-color" className="mx-5">
        <div className="flex-grow-1 ms-3 fw-bold" id="introduction">
          <span>Hi </span>
          <span>&#128075;</span>
          <br></br>
          I'm <span className="gradient">Andreea Csecs</span> a
          <span className="gradient"> polyglot</span> student looking for a
          <span className="gradient"> Frontend Developer</span> role
        </div>
      </div>

      <img src={picture} alt="" className="img-fluid mx-5" id="first-pic" />
    </div>
  );
};

export default Home;
