import React, {useState} from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import '../../App.css';
import logo from '../../assets/images/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    const [activeKey, setActiveKey] = useState('/');

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width="90" height="40" className="d-inline-block align-top float-start" alt="React Bootstrap logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center w-100 fw-bold" activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Link to="/" eventKey="/" className="mx-3 custom-nav-link">Home</Nav.Link>
                        <NavDropdown title="About" id="basic-nav-dropdown" className="mx-3 custom-nav-link text-center dropdown-center">
                            <NavDropdown.Item href="#action/3.1" eventKey="#action/3.1">ICLVE 2024</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" eventKey="#action/3.2">Conference Tracks</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" eventKey="#action/3.3">Important Dates</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" eventKey="#action/3.3">ICLVE Committee</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" eventKey="#action/3.3">History</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link to="/pricing" eventKey="/pricing" className="mx-3 custom-nav-link">Registration</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
