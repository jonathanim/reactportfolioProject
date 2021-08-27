import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container fluid className="footer-site">
      <Row >
        <Col className="d-flex align-items-center justify-content-center">

          <div className="justify-content-center align-items-center">
            <h4>Links</h4>
            <a
              className="footer-links"
              href="#Home"
            >
              <i className="fa fa-home" />
              Home
            </a>

            <a
              className="footer-links"
              href="#About"
            >
              <i className="fa fa-address-book" />
              About
            </a>

            <a
              className="footer-links"
              href="#Services"
            >
              <i className="fa fa-cogs" />
              Services
            </a>

            <a
              className="footer-links"
              href="#Projects"
            >
              <i className="fa fa-folder" />
              Projects
            </a>
            <a
              className="footer-links"
              href="#Contact"
            >
              <i className="fa-envelope" />
              Contact me
            </a>

          </div>


        </Col>

        <Col className="d-flex align-items-center justify-content-center">
          <div className="justify-content-center align-items-center">

            <h4>Info</h4>
            <a
              role="button"
              className="footer-links"
              href="mailto:notreal@notreal.co"
            >
              <i className="fa fa-envelope-o" />
              ImJonathan.work@Gmail.com
            </a>

            <br />
            <a role="button" className="footer-links" href="tel:+1714-232-0818">
              <i className="fa fa-phone" />
              +1714-232-0818
            </a>
            <br />
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
