import React from "react";
import todolist from "./images/todolist.png";
import weatherapp from "./images/weatherapp.png";
import quizapp from "./images/quizapp.png";
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

      <div className="row row-cols-md-3 px-5 m-2">
        <div class="col">
          <div
            class="card border-light"
            id="card-courses"
            style={{ height: "610px" }}
          >
            <img src={quizapp} class="card-img-top" alt="..." />
            <div class="card-body">
              <p className="app-titles mx-1">
                <b>Quiz App </b>
              </p>
              <p
                class="card-text text-start text-muted my-4 mx-2"
                id="app-description"
              >
                This is a simplified version of a quiz game that allows players
                to test their knowledge in various categories and difficulty
                levels. The application provides an interactive and engaging
                quiz experience, where players can select a category and
                difficulty level before starting the game.
              </p>
              <p className="text-start m-2 mx-2 fw-bold" id="tech-stack">
                Tech stack : HTML , CSS, JavaScript, React
              </p>
              <ul className="list-inline m-2 mx-2">
                <li className="list-inline-item">
                  <div type="button" className="btn btn-light github">
                    <a
                      href="https://quizz-andreeea.netlify.app/"
                      className="text-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="d-inline-flex p-2 justify-content space-around">
                        <img
                          src={link}
                          alt=""
                          className="link-icons"
                          style={{ marginRight: "8px" }}
                        />
                        <span>Preview</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="list-inline-item mx-3">
                  <div type="button" className="btn btn-light github m-2 ">
                    <a
                      href="https://github.com/AndreeaCsecs/quiz-app"
                      className="text-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="d-inline-flex p-2 justify-content space-around">
                        <img
                          src={github}
                          alt=""
                          className="link-icons"
                          style={{ marginRight: "8px" }}
                        />
                        <span>Github</span>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col" id="card-projects">
          <div
            class="card border-light"
            id="card-courses"
            style={{ height: "610px" }}
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
              <ul className="list-inline m-2">
                <li className="list-inline-item">
                  <div type="button" className="btn btn-light github">
                    <a
                      href="https://crypto-andreea.netlify.app/"
                      className="text-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="d-inline-flex p-2 justify-content space-around">
                        <img
                          src={link}
                          alt=""
                          className="link-icons"
                          style={{ marginRight: "8px" }}
                        />
                        <span>Preview</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="list-inline-item mx-3">
                  <div type="button" className="btn btn-light github m-2 ">
                    <a
                      href="https://github.com/AndreeaCsecs/quiz-app"
                      className="text-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="d-inline-flex p-2 justify-content space-around">
                        <img
                          src={github}
                          alt=""
                          className="link-icons"
                          style={{ marginRight: "8px" }}
                        />
                        <span>Github</span>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="card border-light"
            id="card-courses"
            style={{ height: "610px" }}
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
              <ul className="list-inline m-2">
                <li className="list-inline-item">
                  <div type="button" className="btn btn-light github">
                    <a
                      href="https://crypto-andreea.netlify.app/"
                      className="text-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="d-inline-flex p-2 justify-content space-around">
                        <img
                          src={link}
                          alt=""
                          className="link-icons"
                          style={{ marginRight: "8px" }}
                        />
                        <span>Preview</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="list-inline-item mx-3">
                  <div type="button" className="btn btn-light github m-2 ">
                    <a
                      href="https://github.com/AndreeaCsecs/quiz-app"
                      className="text-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="d-inline-flex p-2 justify-content space-around">
                        <img
                          src={github}
                          alt=""
                          className="link-icons"
                          style={{ marginRight: "8px" }}
                        />
                        <span>Github</span>
                      </div>
                    </a>
                  </div>
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
