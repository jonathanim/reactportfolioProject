import React from 'react'
import { Container, Row, Col } from "reactstrap";
import '../index.css';
import { Fade } from 'react-animation-components'

function Projects() {
    return (
        <div>
            <Container >
                <Row>
                    <Col>
                        <div className="home-header">
                            <h2 className="">
                                Projects
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Fade in>
                            <div className="text-center box-container">
                                <h1>COMING SOON</h1>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects
