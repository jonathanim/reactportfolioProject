import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Card, CardImg, CardText, CardBody } from "reactstrap";

import "../index.css";
import "./styles/About.css";

function About() {
  return (
    <Container className="section">
      <Row>
        <Col className={styles.columnStyle} xs="12">
          <h1 className="h1-title">About Me</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6} lg={4}>
          <Card style={styles.text}>
            <CardImg
              top
              style={styles.image}
              width="100px"
              src="../assets/favpng_html-responsive-web-design-web-development-software-developer-mobile-app-development.png"
              alt="learning"
            />

            <CardBody>
              <CardText>
                I am a Software Engineer, located in Orange County, CA.
                <hr /> I specialize in Front-End development with knowledge in
                Back-end and UI.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card style={styles.text}>
            <CardImg
              top
              style={styles.image}
              width="100px"
              src="../assets/learning.png"
              alt="learning"
            />
            <CardBody>
              <CardText>
                I love expanding my knowledge and learning new Skills.
                <hr></hr>
                Implementing new ways to create dynamic and better applications.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={12} lg={4}>
          <Card style={styles.text}>
            <CardImg
              top
              style={styles.image}
              width="100px"
              src="../assets/collaborating.png"
              alt="collaborating"
            />
            <CardBody
              style={{ justifyContent: "center", alignContent: "center" }}
            >
              <CardText>
                I love collaborating, teamwork and helping others.
                <hr />
                To be successful in this world, is to create amazing things
                together.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row style={styles.bigCard}>
        <Col xs={12} sm={12} md={6}>
          <img
            style={styles.bigImage}
            src={process.env.PUBLIC_URL + "/assets/goku.jpg"}
            alt="Goku"
          />
        </Col>
        <Col style={styles.text2} xs={12} sm={12} md={3}>
          <h3> Things I love to do</h3>
          <ul>
            <p>I love Creating web apps.</p>
            <p>I love helping people and showing what's possible.</p>
            <p>I love all animals and nature.</p>
            <p>I love Coffee and food.</p>
          </ul>
        </Col>
        <Col style={styles.text2} xs={12} sm={12} md={3}>
          <h3> Fun Facts</h3>
          <ul>
            <p>Originally from Buenos Aires, Argentina</p>
            <p>
              On my free time I love doing extreme sports, snowboarding,
              mountain biking and riding motorcycles
            </p>
            <p>I started my programming pfe since 2019 .</p>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

const styles = {
  text: {
    backgroundColor: "black",
    color: "white",
    padding: "30px auto",
    textAlign: "center",
    fontSize: "20px",
    border: "5px solid #26538d",
    width: "auto",
    height: "600px",
    opacity: ".97",
    margin: "5px",
  },
  image: {
    background: "gray",
    border: "5px solid #26538d",
    display: "block",
    margin: "30px auto",
    height: "300px",
    width: "300px",
  },
  bigCard: {
    backgroundColor: "black",
    color: "white",
    padding: "30px auto",
    textAlign: "center",
    fontSize: "20px",
    border: "5px solid #26538d",
    width: "auto",
    opacity: ".97",
  },
  bigImage: {
    border: "5px solid #26538d",
    display: "block",
    margin: "30px auto",
    height: "300px",
    width: "300px",
  },
  text2: {
    margin: "30px auto",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  columnStyle: {
    margin: "0 30px 0 30px",
    justifyContent: "center",
    alignContent: "center",
  },
};
