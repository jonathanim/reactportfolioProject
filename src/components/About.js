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
                <hr />I specialize in Front-End development with knowledge in
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
      <Row>
        <Col style={styles.text2}>
          <h3> Things I love to do</h3>

          <p>I love Creating web apps.</p>
          <p>I love helping people and showing what's possible.</p>
          <p>I love all animals and nature.</p>
          <p>I love Coffee and food.</p>
        </Col>
        <Col style={styles.text2}>
          <img
            style={styles.image}
            src={process.env.PUBLIC_URL + "/assets/goku.jpg"}
            alt="goku"
          />
        </Col>
        <Col style={styles.text2}>
          <h3> Fun Facts</h3>

          <p>Originally from Buenos Aires, Argentina</p>
          <p>
            On my free time I love doing extreme sports, snowboarding, mountain
            biking and riding motorcycles
          </p>
          <p>I started my programming pfe since 2019 .</p>
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
  text2: {
    backgroundColor: "black",
    color: "white",
    fontSize: "20px",
    border: "5px solid #26538d",
    textAlign: "center",
    padding: "20px",
    margin: "10px 10px",
  },
  image: {
    background: "gray",
    border: "5px solid #26538d",
    display: "block",
    margin: "30px auto",
    height: "300px",
    width: "300px",
  },

  columnStyle: {
    margin: "0 30px 0 30px",
    justifyContent: "center",
    alignContent: "center",
  },
};
