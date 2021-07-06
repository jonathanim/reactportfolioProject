import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <Row>
        <Col xs="6">
          <h5>Links</h5>
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
                Resume
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/">
                Contact Me
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs="6">
          <div className="col-6 col-sm-3 text-center">
            <a
              role="button"
              className="btn btn-link text-link"
              href="tel:+1714-232-0818"
            >
              <i className="fa fa-phone" /> +1714-232-0818
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:notreal@notreal.co"
            >
              <i className="fa fa-envelope-o" /> ImJonathan.work@gmail.com
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
