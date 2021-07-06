import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';
import './Navbar.css'

const MyNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar dark expand="sm" className="customNB">
                <NavbarBrand href="/" className="logoPadding" >IMVision</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem>
                            <NavLink href="/" active >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Services/">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Resume/">Resume</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Contact/">Contact Me</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default MyNavbar;