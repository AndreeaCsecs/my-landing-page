import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Courses from "./components/Courses";

function App() {
  return (
    <div className="App container" id="body">
      <Navbar />
      <Home />
      <Stack />
      <Projects />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
