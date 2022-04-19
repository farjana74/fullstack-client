import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo 1.png';
import "./Header.css";


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="light" className='shadow-sm nav-header-link-text '>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" className='img-fluid' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link to="/home" as={Link} className="pe-sm-3">Home</Nav.Link>






                        <Nav.Link to="/addReview" as={Link} className="pe-sm-3">Add Review</Nav.Link>

                        <Nav.Link to="/dashboard" as={Link} className="pe-sm-3">Users Dashboard</Nav.Link>
                        <Nav.Link to="/manages" as={Link} className="pe-sm-3">Manage Review</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;