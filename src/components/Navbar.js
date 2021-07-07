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

const MyNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar dark expand="sm" className="customNB">
                <NavbarBrand href="/" className="logoPadding">
                    <span>
                        IMVision
                    </span>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem>
                            <NavLink className="text-link" to="/" active>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-link" to="/Services/">
                                Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-link" to="/Projects/">
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-link" to="/Contact/">
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
