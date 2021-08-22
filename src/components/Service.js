import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../index.css";
import CustomCard from "./subComponents/CustomCard";
import "../index.css";
import * as Gi from "react-icons/gi";
import * as Fa from "react-icons/fa";
import * as Im from "react-icons/im";
function Service() {
  return (
    <Container className="section">
      <Row>
        <Col className={styles.columnStyle}>
          <h1 className="h1-title">Service</h1>
        </Col>
      </Row>
      <Row style={styles.background1}></Row>
      <Row style={styles.background2}>
        <Col xs={12} sm={6} md={6} lg={3}>
          <CustomCard
            title="Fast"
            text="Fast load times and lag free interaction, my highest priority."
          >
            <Gi.GiSpeedometer size="4em" color="rgb(209, 0, 104)" />
          </CustomCard>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <CustomCard
            title="Intuitive"
            text="Strong preference for easy to use, intuitive UX/UI.
"
          >
            <Gi.GiLightBulb size="4em" color="rgb(209, 0, 104)" />
          </CustomCard>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <CustomCard
            title="Responsive"
            text="My layouts will work on any device, big or small.
"
          >
            <Fa.FaLaptopCode size="4em" color="rgb(209, 0, 104)" />
          </CustomCard>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <CustomCard
            title="Dynamic"
            text="Websites don't have to be static, I love making pages come to life.
"
          >
            <Im.ImMoveUp size="4em" color="rgb(209, 0, 104)" />
          </CustomCard>
        </Col>
      </Row>
      <Row style={styles.background3}></Row>
    </Container>
  );
}

export default Service;

const styles = {
  background1: {
    backgroundColor: "white",
    height: "33vh",
    width: "auto",
  },
  background2: {
    backgroundColor: "black",
    border: "3px solid rgb(209, 0, 104)",
    height: "300px",
    width: "auto",
    position: "relative",
    display: "flex",
  },
  background3: {
    backgroundColor: "white",
    height: "33vh",
    width: "auto",
  },
  columnStyle: {
    margin: "0 30px 0 30px",
    justifyContent: "center",
    alignContent: "center",
  },
};
