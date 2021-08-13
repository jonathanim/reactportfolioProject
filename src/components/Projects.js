import React from 'react'
import { Container, Row, Col } from "reactstrap";
import '../index.css';
import { Fade } from 'react-animation-components'

function Projects() {
    return (
        <Container className="section">
            <Row>
                <Col>
                    <h1 className="h1-title"> <span style={{ color: 'rgb(209, 0, 104)' }}>PROJECTS</span></h1>
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
    )
}

export default Projects
