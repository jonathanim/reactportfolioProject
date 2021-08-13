import React from "react";
import { Fade } from 'react-animation-components'
import Intro from "./Intro";
import About from './About'
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer"



function BodyComponent() {
    return (
        <Fade in>
            <Intro />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </Fade>
    );
}

export default BodyComponent;
