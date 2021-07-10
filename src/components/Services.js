import React from 'react'
import { Container, Row, Col } from "reactstrap";
import '../index.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components'


function Services({ skills }) {

    const renderCards = (card) => {

        function truncate(str, n) {
            return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
        };

        return (
            <Col key={card.id}>

                <Fade in>
                    <Card className="customCard mb-4">
                        <CardImg top src={card.image} alt={card.name} />
                        <CardBody>
                            <CardTitle tag="h3">{card.name}</CardTitle>
                            <CardText>{truncate(card.description, 50)}</CardText>
                            <Link to={`/services/${card.id}`} className="btn btn-dark">Display More Info</Link>
                        </CardBody>
                    </Card >
                </Fade>

            </Col >
        )
    }

    // const RenderCard = ({ match }) => {
    //     return (
    //         <CardPage

    //         />
    //     );
    // };

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
                    {skills.map(renderCards)}
                </Row>
            </Container>
        </div >
    )
}

export default Services
