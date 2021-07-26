import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "./customComponents/MyNavLink"

const MyNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar fixed="top" dark expand="sm" className="customNB">
                <NavbarBrand href="/" >
                    <div className="logoPadding glow-on-hover">
                        Jonathan Im
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem>
                            <NavLink className="text-link glow-on-hover" to="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-link  glow-on-hover" to="/Services/">
                                Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-link  glow-on-hover" to="/Projects/">
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-link  glow-on-hover" to="/Contact/">
                                Contact Me
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
};

export default MyNavbar;
