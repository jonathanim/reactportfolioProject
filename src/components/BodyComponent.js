import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import './BodyComponent.css';
function BodyComponent() {
    return (
        <Container>
            <Row>
                <Col >
                    <div className="home-header">
                        <h2 className="pb-5">
                            Hi, I'm Jonathan 👋
                        </h2>
                        <h1 className="text-center">
                            Creating Brands, <br />Creating Apps,<br />Creating Innovation
                        </h1>
                    </div>
                    <div className="text-center">
                        <Button color="primary" block>Lets Get in Touch</Button>
                    </div>
                </Col>
            </Row >

        </Container >
    )
}

export default BodyComponent
