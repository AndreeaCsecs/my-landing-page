import React from "react";
import todolist from "./images/todolist.png";
import weatherapp from "./images/weatherapp.png";
import cryptoapp from "./images/cryptoapp.png";
import github from "./images/github3.png";
import link from "./images/link.png";

const Projects = () => {
  return (
    <div className="Projects text-center container my-5 py-3" id="projects">
      <div className="m-2">
        <p className="fw-bold mb-3" id="titles">
          Projects
        </p>
        <p className="p-3" id="subtitle">
          Things I've built so far
        </p>
      </div>

      <div className="row row-cols-md-3 p-5 m-2">
        <div class="col" id="card-projects">
          <div
            class="card border-light"
            id="card-courses"
            style={{ height: "580px" }}
          >
            <img src={todolist} class="card-img-top" alt="..." />
            <div class="card-body">
              <p className="app-titles">
                <b>To-do app</b>
              </p>
              <p
                class="card-text text-start text-muted my-3 mx-2"
                id="app-description"
              >
                A simple to-do app built using React that allows users to create
                and manage a list of tasks with features such as not started, in
                progress, and completed tasks, week day choice. The app is
                integrated with third-party libraries like React-Bootstrap to
                provide a modern and visually appealing interface.
              </p>

              <p className="text-start m-2 fw-bold" id="tech-stack">
                Tech stack : HTML , CSS, JavaScript, React, Bootstrap
              </p>
              <ul className="list-inline m-3">
                <li className="list-inline-item mx-3">
                  <img src={link} alt="" className="link-icons" />
                  <a
                    href="https://to-do-andreea.netlify.app/"
                    className="text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Preview
                  </a>
                </li>
                <li className="list-inline-item mx-3">
                  <img src={github} alt="" className="link-icons" />
                  <a
                    href="https://github.com/AndreeaCsecs/to-do-app"
                    className="text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="card border-light"
            id="card-courses"
            style={{ height: "580px" }}
          >
            <img src={weatherapp} class="card-img-top" alt="..." />
            <div class="card-body">
              <p className="app-titles">
                <b>Weather App </b>
              </p>
              <p
                class="card-text text-start text-muted my-3 mx-2"
                id="app-description"
              >
                A simple weather app built using React would allow users to
                input a location and receive current weather data for that
                location, including temperature, humidity, and wind speed. The
                app uses HTTPS Requests to fetch data from api.weatherapi.com
                and integrates with third-party libraries like React-Bootstrap,
                to provide a clean and user-friendly interface.
              </p>
              <p className="text-start m-2 fw-bold" id="tech-stack">
                Tech stack : HTML , CSS, JavaScript, React, Bootstrap, HTTPS
                Requests
              </p>
              <ul className="list-inline m-3">
                <li className="list-inline-item mx-3">
                  <img src={link} alt="" className="link-icons" />
                  <a
                    href="https://weather-andreea.netlify.app/"
                    className="text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Preview
                  </a>
                </li>
                <li className="list-inline-item mx-3">
                  <img src={github} alt="" className="link-icons" />
                  <a
                    href="https://github.com/AndreeaCsecs/weather-app"
                    className="text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="card border-light"
            id="card-courses"
            style={{ height: "580px" }}
          >
            <img src={cryptoapp} class="card-img-top" alt="..." />
            <div class="card-body">
              <p className="app-titles">
                <b>Crypto App </b>
              </p>
              <p
                class="card-text text-start text-muted my-3 mx-2"
                id="app-description"
              >
                A simple crypto app built using React and Bootstrap that
                displays the latest prices and daily changes of various
                cryptocurrencies along with their market cap. The app uses HTTP
                requests to fetch data from APIs such as Binance API to retrieve
                real-time data and provide a user-friendly interface.
              </p>
              <p className="text-start m-2 fw-bold" id="tech-stack">
                Tech stack : HTML , CSS, JavaScript, React, Bootstrap, HTTP
                Requests
              </p>
              <ul className="list-inline m-3">
                <li className="list-inline-item mx-3">
                  <img src={link} alt="" className="link-icons" />
                  <a
                    href="https://crypto-andreea.netlify.app/"
                    className="text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Preview
                  </a>
                </li>
                <li className="list-inline-item mx-3">
                  <img src={github} alt="" className="link-icons" />
                  <a
                    href="https://github.com/AndreeaCsecs/crypto-app"
                    className="text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
