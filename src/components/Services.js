import React from 'react'
import { Container, Row, Col } from "reactstrap";
import '../index.css'
import { SKILLSDATA } from './SkillsData';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom'

function Services() {

    const renderCards = (card) => {

        function truncate(str, n) {
            return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
        };

        return (
            <Col xs="3">
                <Card key={card.id} className="customCard">
                    <CardImg top src={card.image} alt={card.name} />
                    <CardBody>
                        <CardTitle tag="h3">{card.name}</CardTitle>
                        <CardText>{truncate(card.description, 50)}</CardText>
                        <Link to={`/services/${card.id}`} className="btn btn-dark">Display More Info</Link>
                    </CardBody>
                </Card >
            </Col >
        )
    }


    return (
        <div>
            <Container >
                <Row>
                    <Col>
                        <div className="home-header">
                            <h2 className="">
                                Services And Technologies
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {SKILLSDATA.map(renderCards)}
                </Row>
            </Container>
        </div >
    )
}

export default Services
