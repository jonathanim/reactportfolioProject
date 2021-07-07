import React, { useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import '../index.css'
import { SKILLSDATA } from './SkillsData';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardGroup, Button
} from 'reactstrap';
function Services() {

    return (
        <div>
            <Container >
                <Row>
                    <Col>
                        <div className="home-header">
                            <h2 className="pb-5">
                                Services And Technologies
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <CardGroup>
                        {SKILLSDATA.map(skill => {
                            return (
                                <Card width="50px" key={skill.id}>
                                    <CardImg top src={skill.image} alt={skill.name} />
                                    <CardBody>
                                        <CardTitle tag="h5">{skill.name}</CardTitle>
                                        <CardText>{skill.description}</CardText>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card >


                            )
                        })}
                    </CardGroup>
                </Row>
            </Container>
        </div >
    )
}

export default Services
