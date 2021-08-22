import React from "react";
import { Fade } from "react-animation-components";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Service from "./Service";

function BodyComponent() {
  return (
    <Fade in>
      <Intro />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </Fade>
  );
}

export default BodyComponent;
