import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../index.css"
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components'
import About from './About'
import Projects from "./Projects";
import Contact from "./Contact";
import Services from "./Services";
import SkillBars from "./SkillsBars";


function BodyComponent() {
    return (
        <Fade in>
            <Container>
                <Row>
                    <Col>
                        <div className="home-header">

                            <h2 className="">
                                <Typewriter
                                    options={{
                                        strings: ['Hi', "I'm Jonathan", "Welcome to my Site"],
                                        autoStart: true,
                                        loop: true,
                                        pauseFor: 1000,
                                        deleteSpeed: 200
                                    }}
                                />
                            </h2>
                            <h1 className="text-center">
                                Creating Brands, <br />
                                Creating Apps,
                                <br />
                                Creating Innovation
                            </h1>
                        </div>
                        <div className="text-center">
                            <Link to="/contact" className="btn btn-dark p-3" block>
                                Lets Get in Touch
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <About />
            <SkillBars />   
            <Services />
            <Projects />
            <Contact />


        </Fade>
    );
}

export default BodyComponent;
