import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import '../index'
import { Fade } from 'react-animation-components'





function CardPage({ skill }) {

    return (
        <Container>
            <Row>
                <Col>
                    <div className="home-header">
                        <h1> <Media src={`${skill.image}`} alt={skill.name} /></h1>
                        <h1>{skill.name}</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Fade in enterOpacity={1}>
                        <div className="text-center box-container">
                            {skill.description}
                        </div>
                    </Fade>
                </Col>
            </Row>
        </Container >
    )
}

export default CardPage
