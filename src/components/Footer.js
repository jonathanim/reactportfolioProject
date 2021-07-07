import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container fluid className="footer-site">
      <Row>
        <Col sm="4">
          <h4>Links</h4>
          <ul className="list-unstyled">
            <li>
              <Link className="text-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/">
                Services
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/">
                Projects
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/">
                Contact Me
              </Link>
            </li>
          </ul>
        </Col>
        <Col sm="4">
          <h4>Socials</h4>
          <Link className="text-link" to="/">
            GitHub
          </Link>
          <br></br>
          <Link className="text-link" to="/">
            LinkedIn
          </Link>
        </Col>

        <Col sm="4">
          <h4>Info</h4>
          <a
            role="button"
            className="btn btn-link"
            href="mailto:notreal@notreal.co"
          >
            <i className="fa fa-envelope-o" /> ImJonathan.work@gmail.com
          </a>

          <br />
          <a
            role="button"
            className="btn btn-link text-link"
            href="tel:+1714-232-0818"
          >
            <i className="fa fa-phone" /> +1714-232-0818
          </a>


        </Col>

      </Row>
    </Container >
  );
}

export default Footer;
