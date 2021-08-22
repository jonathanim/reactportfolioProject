import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Card, CardImg, CardText, CardBody } from "reactstrap";
import SkillBars from "./SkillsBars";
import "../index.css";
import "./styles/About.css";
import SkillSet from "./SkillSet";

function About() {
  return (
    <Container className="section">
      <Row xs="12">
        <Col className={styles.columnStyle}>
          <h1 className="h1-title">
            About <span style={{ color: "rgb(209, 0, 104)" }}>Me</span>
          </h1>
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
              alt="Card image cap"
            />
            <CardBody>
              <CardText>
                I am a Software Engineer, located in Orange County, CA.
                <hr /> I specialize in Front-End development.
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
                I love learning new technologies and acquiring new skills.
                <hr />
                Implementing new ways to create dynamic applications.
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
            <CardBody>
              <CardText>
                I love collaborating, teamwork and helping others.
                <hr />
                To be successful in this world, is not create amazing things
                together.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row
        className={{
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <SkillBars />
        <SkillSet />
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
    border: "5px solid rgb(209, 0, 104)",
    width: "auto",
    height: "550px",
    opacity: ".97",
    margin: "5px",
  },
  image: {
    background: "black",
    border: "5px solid white",
    display: "block",
    margin: "30px auto",
    height: "250px",
    width: "250px",
  },
  columnStyle: {
    margin: "0 30px 0 30px",
    justifyContent: "center",
    alignContent: "center",
  },
};
