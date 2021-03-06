import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "../index.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "../components/styles/Intro.css";

function Intro() {
  const firstString =
    "<span style='color: white; text-shadow: 2px 2px black'>Hi</span>";
  const secondString =
    "<span style='color: white; text-shadow: 2px 2px black'>I'm Jonathan</span>";
  const thirdString =
    '<strong><span style="color: white; text-shadow: 2px 2px black">Welcome to my</span> <span style="color: rgb(209, 0, 104); text-shadow: 2px 2px black">Website</span></strong>';

  const [opacity, setOpacity] = useState(0.5);
  const [transition, setTransition] = useState("2s");

  return (
    <Container fluid>
      <Row>
        <Col
          id="Home"
          className="bgBack"
          style={{
            height: "100vh",
            width: "100vw",
            borderBottom: "3px solid #26538d",
          }}
        >
          <div className="home-header mt-5">
            <h1 className="h2-title">
              <Typewriter
                options={{
                  strings: [firstString, secondString, thirdString],
                  autoStart: true,
                  loop: true,
                  pauseFor: 1000,
                  deleteSpeed: 200,
                }}
              />
            </h1>
            <h1
              className="text-center"
              style={{
                fontSize: "70px",
                color: "white",
                textShadow: "3px 2px #26538d",
              }}
            >
              Creating Brands, <br />
              Creating Apps,
              <br />
              Creating Innovation
            </h1>
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="btn btn-light p-4"
              block
              style={{
                borderColor: "#26538d",
                borderWidth: "4px",
                borderRadius: "15px",
                fontSize: " 25px",
                opacity: opacity,
                transition: transition,
              }}
              onMouseEnter={() => {
                setOpacity(1);
                setTransition("1s");
              }}
              onMouseLeave={() => {
                setOpacity(0.2);
                setTransition("5s");
              }}
            >
              Lets Get in Touch
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
