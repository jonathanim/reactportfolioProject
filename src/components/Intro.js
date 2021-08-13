import React from 'react'
import { Container, Row, Col } from "reactstrap";
import "../index.css"
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import SkillBars from './SkillsBars';


function Intro() {
    return (
        <Container className="section" style={{ height: '100vh' }}>
            <Row>
                <Col>
                    <div className="home-header">
                        <h2 className="h2-title">
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
                </Col>
            </Row >
            <Row>
                <Col>
                    <div className="text-center">
                        <Link to="/contact" className="btn btn-dark p-3" block>
                            Lets Get in Touch
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro
