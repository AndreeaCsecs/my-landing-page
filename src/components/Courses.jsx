import React from "react";
import growthcube from "./images/growthcube.jpeg";
import nttdata from "./images/nttdata.png";
import ibm from "./images/ibm.png";
import tp from "./images/tp.png";
import codecool from "./images/codecool.png";
import codecademy from "./images/codecademy.png";

const Courses = () => {
  return (
    <div className="Courses container">
      <div class="row" id="text-color">
        <div class="col m-5 p-5">
          <p className="ms-2 fw-bold" id="title-courses">
            Courses & Bootcamps:
          </p>

          <div class="card border-light m-2" id="card-courses">
            <div class="row g-0">
              <div class="col-md-2">
                <img
                  src={codecool}
                  class="img-fluid rounded-start m-2 mt-3"
                  alt="..."
                  id="img-courses"
                />
              </div>
              <div class="col">
                <div class="card-body">
                  <span class="card-title-courses">
                    Frontend Developer Bootcamp Student
                  </span>
                  <br></br>
                  <span class="card-text" id="card-subtitle-courses">
                    Codecool <br></br>
                    <small class="text-muted">Sep 2022 - March 2023</small>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="row row-cols-1 row-cols-md-2 g-0 p-1">
            <div class="col p-1">
              <div class="card border-light me-1" id="card-courses">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={codecademy}
                      class="img-fluid rounded-start m-2 my-4"
                      id="img-codecademy"
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <p class="card-text p-2 ms-2">
                      <span className="title-codecademy">
                        JavaScript Unit Testing
                      </span>
                      <br></br>
                      <span id="subtitle-codecademy">Codecademy</span>
                      <br></br>
                      <small class="text-muted" id="date">
                        Sept 2022
                      </small>
                      <a
                        href="https://www.codecademy.com/profiles/AndreeaCsecs/certificates/f4276e8c08a3ba174ef0147deb0c3013"
                        className="gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <small className="m-2" id="certificates">
                          Certificate
                        </small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col p-1">
              <div class="card border-light me-1" id="card-courses">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={codecademy}
                      class="img-fluid rounded-start m-2 my-4"
                      id="img-codecademy"
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <p class="card-text p-2 ms-2">
                      <span className="title-codecademy">
                        Learn CSS-in-JS Course
                      </span>
                      <br></br>
                      <span id="subtitle-codecademy">Codecademy</span>
                      <br></br>
                      <small class="text-muted" id="date">
                        Sept 2022
                      </small>
                      <a
                        href="https://www.codecademy.com/profiles/AndreeaCsecs/certificates/ea3393a7494383023c17a96830b95be8"
                        className="gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <small className="m-2" id="certificates">
                          Certificate
                        </small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row row-cols-1 row-cols-md-2 g-0 p-1">
            <div class="col p-1">
              <div class="card border-light me-1" id="card-courses">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={codecademy}
                      class="img-fluid rounded-start m-2 my-4"
                      id="img-codecademy"
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <p class="card-text p-2 ms-2">
                      <span className="title-codecademy">
                        Interactive JavaScript
                      </span>
                      <br></br>
                      <span id="subtitle-codecademy">Codecademy</span>

                      <br></br>
                      <small class="text-muted" id="date">
                        Sept 2022
                      </small>
                      <a
                        href="https://www.codecademy.com/profiles/AndreeaCsecs/certificates/36ae898a1d1c8524815305b2d1d2ebab"
                        className="gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <small className="m-2" id="certificates">
                          Certificate
                        </small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col p-1">
              <div class="card border-light ms-1" id="card-courses">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={codecademy}
                      class="img-fluid rounded-start m-2 my-4"
                      id="img-codecademy"
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <p class="card-text p-2 ms-2">
                      <span className="title-codecademy">
                        Intermediate CSS Course
                      </span>
                      <br></br>
                      <span id="subtitle-codecademy">Codecademy</span>
                      <br></br>
                      <small class="text-muted" id="date">
                        Sept 2022
                      </small>
                      <a
                        href="https://www.codecademy.com/profiles/AndreeaCsecs/certificates/b3dec49423da50603c25618aee635027"
                        className="gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <small className="m-2" id="certificates">
                          Certificate
                        </small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row row-cols-1 row-cols-md-2 g-0 p-1">
            <div class="col p-1">
              <div class="card border-light me-1" id="card-courses">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={codecademy}
                      class="img-fluid rounded-start m-2 my-4"
                      id="img-codecademy"
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <p class="card-text p-2 ms-2">
                      <span className="title-codecademy">
                        Intermediate JavaScript
                      </span>
                      <br></br>
                      <span id="subtitle-codecademy">Codecademy</span>
                      <br></br>
                      <small class="text-muted" id="date">
                        Aug 2022
                      </small>
                      <a
                        href="https://www.codecademy.com/profiles/AndreeaCsecs/certificates/512386fdc7f6c934f98b01e6afa8285a"
                        className="gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <small className="m-2" id="certificates">
                          Certificate
                        </small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col p-1">
              <div class="card border-light ms-1" id="card-courses">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={codecademy}
                      class="img-fluid rounded-start m-2 my-4"
                      id="img-codecademy"
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <p class="card-text p-2 ms-2">
                      <span className="title-codecademy">
                        Learn React Testing Course
                      </span>
                      <br></br>
                      <span id="subtitle-codecademy">Codecademy</span>
                      <small class="text-muted" id="date">
                        <br></br>
                        Aug 2022
                      </small>
                      <a
                        href="https://www.codecademy.com/profiles/AndreeaCsecs/certificates/1790781f3857d258b06a24f3c53424cd"
                        className="gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <small className="m-2" id="certificates">
                          Certificate
                        </small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row row-cols-1 row-cols-md-2 g-0 p-1">
            <div class="col p-1">
              <div class="card border-light me-1" id="card-courses">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={codecademy}
                      class="img-fluid rounded-start m-2 my-4"
                      id="img-codecademy"
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <p class="card-text p-2 ms-2">
                      <span className="title-codecademy">
                        Learn React Course
                      </span>
                      <br></br>
                      <span id="subtitle-codecademy">Codecademy</span>
                      <br></br>
                      <small class="text-muted" id="date">
                        Aug 2022
                      </small>
                      <a
                        href="https://www.codecademy.com/profiles/AndreeaCsecs/certificates/af00e5032d0a68cc84879983f5d8333b"
                        className="gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <small className="m-2" id="certificates">
                          Certificate
                        </small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col p-1">
              <div class="card border-light ms-1" id="card-courses">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={codecademy}
                      class="img-fluid rounded-start m-2 my-4"
                      id="img-codecademy"
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <p class="card-text p-2 ms-2">
                      <span className="title-codecademy">
                        Learn Vue.js Course
                      </span>
                      <br></br>
                      <span id="subtitle-codecademy">Codecademy</span>
                      <br></br>
                      <small class="text-muted" id="date">
                        Aug 2022
                      </small>
                      <a
                        href="https://www.codecademy.com/profiles/AndreeaCsecs/certificates/db927a84bf4bba96bb285ee6a85466fc"
                        className="gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <small className="m-2" id="certificates">
                          Certificate
                        </small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row row-cols-1 row-cols-md-2 g-0 p-1">
            <div class="col p-1">
              <div class="card border-light me-1" id="card-courses">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={codecademy}
                      class="img-fluid rounded-start m-2 my-4"
                      id="img-codecademy"
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <p class="card-text p-2 ms-2">
                      <span className="title-codecademy">
                        Learn jQuerry Course
                      </span>
                      <br></br>
                      <span id="subtitle-codecademy">Codecademy</span>

                      <br></br>
                      <small class="text-muted" id="date">
                        Aug 2022
                      </small>
                      <a
                        href="https://www.codecademy.com/profiles/AndreeaCsecs/certificates/0becf7c1cd2bd715f24331dddd23425a"
                        className="gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <small className="m-2" id="certificates">
                          Certificate
                        </small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col p-1">
              <div class="card border-light ms-1" id="card-courses">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={codecademy}
                      class="img-fluid rounded-start m-2 my-4"
                      id="img-codecademy"
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <p class="card-text p-2 ms-2">
                      <span className="title-codecademy">
                        Deploy a website Course
                      </span>
                      <br></br>
                      <span id="subtitle-codecademy">Codecademy</span>

                      <br></br>
                      <small class="text-muted" id="date">
                        Aug 2022
                      </small>
                      <a
                        href="https://www.codecademy.com/profiles/AndreeaCsecs/certificates/358e250fca144526a6b2934ff44fbc01"
                        className="gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <small className="m-2" id="certificates">
                          Certificate
                        </small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row row-cols-1 row-cols-md-2 g-0 p-1">
            <div class="col p-1">
              <div class="card border-light me-1" id="card-courses">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={codecademy}
                      class="img-fluid rounded-start m-2 my-4"
                      id="img-codecademy"
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <p class="card-text p-2 ms-2">
                      <span className="title-codecademy">
                        Learn JavaScript Course
                      </span>
                      <br></br>
                      <span id="subtitle-codecademy">Codecademy</span>

                      <br></br>
                      <small class="text-muted" id="date">
                        Aug 2022
                      </small>
                      <a
                        href="https://www.codecademy.com/profiles/AndreeaCsecs/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
                        className="gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <small className="m-2" id="certificates">
                          Certificate
                        </small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col p-1">
              <div class="card border-light ms-1" id="card-courses">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={codecademy}
                      class="img-fluid rounded-start m-2 my-4"
                      id="img-codecademy"
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <p class="card-text p-2 ms-2">
                      <span className="title-codecademy">
                        Learn HTML Course
                      </span>
                      <br></br>
                      <span id="subtitle-codecademy">Codecademy</span>
                      <br></br>
                      <small class="text-muted" id="date">
                        July 2022
                      </small>
                      <a
                        href="https://www.codecademy.com/profiles/AndreeaCsecs/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7"
                        className="gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <small className="m-2" id="certificates">
                          Certificate
                        </small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row row-cols-1 row-cols-md-2 g-0 p-1">
            <div class="col p-1">
              <div class="card border-light me-1" id="card-courses">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={codecademy}
                      class="img-fluid rounded-start m-2 my-4"
                      id="img-codecademy"
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <p class="card-text p-2 ms-2">
                      <span className="title-codecademy">Learn CSS Course</span>
                      <br></br>
                      <span id="subtitle-codecademy">Codecademy</span>
                      <br></br>
                      <small class="text-muted" id="date">
                        July 2022
                      </small>
                      <a
                        href="https://www.codecademy.com/profiles/AndreeaCsecs/certificates/9a5bb1fc45b4281af1fffec93b0aaf05"
                        className="gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <small className="m-2" id="certificates">
                          Certificate
                        </small>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col m-5 p-5">
          <p className="ms-2 fw-bold" id="title-courses">
            Work experience:
          </p>

          <div class="card border-light my-3" id="card-courses">
            <div class="row g-0">
              <div class="col-md-2">
                <img
                  src={growthcube}
                  class="img-fluid rounded-start m-2 mt-3"
                  alt="..."
                  id="img-courses"
                />
              </div>
              <div class="col">
                <div class="card-body">
                  <span class="card-title-courses">
                    Junior Frontend Developer
                  </span>
                  <br></br>
                  <span class="card-text" id="card-subtitle-courses">
                    Growthcube.io <br></br>
                    <small class="text-muted">Nov 2022 - Present</small>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="card border-light my-3" id="card-courses">
            <div class="row g-0">
              <div class="col-md-2">
                <img
                  src={nttdata}
                  class="img-fluid rounded-start m-2 mt-3"
                  alt="..."
                  id="img-courses"
                />
              </div>
              <div class="col">
                <div class="card-body">
                  <span class="card-title-courses">
                    Helpdesk Analyst - German Service Desk
                  </span>
                  <br></br>
                  <span class="card-text" id="card-subtitle-courses">
                    NTT Data <br></br>
                    <small class="text-muted">Sep 2022 - Present</small>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="card border-light my-3" id="card-courses">
            <div class="row g-0">
              <div class="col-md-2">
                <img
                  src={ibm}
                  class="img-fluid rounded-start m-2 mt-3"
                  alt="..."
                  id="img-courses"
                />
              </div>
              <div class="col">
                <div class="card-body">
                  <span class="card-title-courses">
                    German Technical Support Specialist
                  </span>
                  <br></br>
                  <span class="card-text" id="card-subtitle-courses">
                    IBM <br></br>
                    <small class="text-muted">May 2021 - June 2022</small>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="card border-light my-3" id="card-courses">
            <div class="row g-0">
              <div class="col-md-2">
                <img
                  src={tp}
                  class="img-fluid rounded-start m-2 mt-3s"
                  alt="..."
                  id="img-courses"
                />
              </div>
              <div class="col">
                <div class="card-body">
                  <span class="card-title-courses">
                    German Tehnical Support Advisor
                  </span>
                  <br></br>
                  <span class="card-text" id="card-subtitle-courses">
                    Teleperformance<br></br>
                    <small class="text-muted">Jan 2020 - April 2021</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
