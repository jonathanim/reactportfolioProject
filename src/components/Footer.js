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
          <Link className=" footer-link" to="/">

            <i className="fa fa-home" />
            Home

          </Link>

          <Link className="footer-link" to="/services">

            <i className="fa fa-cogs" />
            Services

          </Link>


          <Link className="footer-link" to="/projects">

            <i className="fa fa-folder" />
            Projects
          </Link>

          <Link className="footer-link" to="/contact">

            <i className="fa fa-address-book" />
            Contact Me
          </Link>
        </Col>
        <Col sm="4">
          <h4>Socials</h4>
          <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
          <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
          <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
          <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
        </Col>

        <Col sm="4">
          <h4>Info</h4>
          <a
            role="button"
            className="footer-link"
            href="mailto:notreal@notreal.co"
          >
            <i className="fa fa-envelope-o" />
            ImJonathan.work@Gmail.com
          </a>

          <br />
          <a
            role="button"
            className="footer-link"
            href="tel:+1714-232-0818"
          >
            <i className="fa fa-phone" />
            +1714-232-0818
          </a>
        </Col>

      </Row>
    </Container >
  );
}

export default Footer;
