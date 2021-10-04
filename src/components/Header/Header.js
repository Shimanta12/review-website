import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const activeStyle = {
        color: 'white'
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink className="text-decoration-none fw-bold fs-2" to="/home"><FontAwesomeIcon icon={faCode} /> iCode</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink activeStyle={activeStyle} className="text-decoration-none fw-bold fs-5 ms-2" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className="text-decoration-none fw-bold fs-5 ms-2" to="/about">About</NavLink>
                        <NavLink activeStyle={activeStyle} className="text-decoration-none fw-bold fs-5 ms-2" to="/services">Services</NavLink>
                        <NavLink activeStyle={activeStyle} className="text-decoration-none fw-bold fs-5 ms-2" to="/signup">SignUp</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;