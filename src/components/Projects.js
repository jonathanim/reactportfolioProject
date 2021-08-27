import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import "../index.css";
import { Fade } from "react-animation-components";

import { PROJECTS } from '../data/data'

function Projects() {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(PROJECTS)
    console.log(data)
  }, [data])

  return (
    <Container className="section">
      <Row>
        <Col>
          <h1 className="h1-title"> Projects</h1>
        </Col>
      </Row>
      <Row>

        {data.map((project, index) => {
          return (
            <Col key={index} lg="4" >
              <Fade in>
                <Card >
                  <CardImg top width="100%" src={process.env.PUBLIC_URL + ` ${project.image}`} alt={project.name} />
                  <CardBody className="text-center mt-1">
                    <CardTitle tag="h5">{project.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{project.tools}</CardSubtitle>
                    <CardText>{project.description}</CardText>
                    <Link to={{ pathname: `${project.url}` }} target="_blank" >View</Link>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

          )
        })}

      </Row>
    </Container>
  );
}

export default Projects;
