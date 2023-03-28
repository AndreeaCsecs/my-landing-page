import React from "react";
import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";
import react from "./images/react.png";
import bootstrap from "./images/bootstrap.png";
import ts from "./images/ts.png";
import netlify from "./images/netlify.png";
import vscode from "./images/vscode.png";
import github from "./images/github2.png";
import figma from "./images/figma.png";

const Stack = () => {
  return (
    <div className="Stack text-center container p-5 my-5" id="techstack">
      <div className="m-5 pt-4">
        <p className="fw-bold m-4" id="titles">
          My Tech Stack
        </p>
        <p className="m-5" id="subtitle">
          Technologies I've been working with recently
        </p>
      </div>

      <div class="row pt-5 p-3 m-5">
        <div class="col">
          <img src={html} alt="" id="html" />
        </div>
        <div class="col">
          <img src={css} alt="" id="css" />
        </div>
        <div class="col">
          <img src={react} alt="" id="react" />
        </div>
        <div class="col">
          <img src={js} alt="" id="js" />
        </div>
        <div class="col">
          <img src={bootstrap} alt="" id="bootstrap" />
        </div>
      </div>
      <div class="row p-3 m-5">
        <div class="col">
          <img src={ts} alt="" id="ts" />
        </div>
        <div class="col">
          <img src={netlify} alt="" id="netlify" />
        </div>
        <div class="col">
          <img src={vscode} alt="" id="vscode" />
        </div>
        <div class="col">
          <img src={github} alt="" id="github" />
        </div>
        <div class="col">
          <img src={figma} alt="" id="figma" />
        </div>
      </div>
    </div>
  );
};

export default Stack;
