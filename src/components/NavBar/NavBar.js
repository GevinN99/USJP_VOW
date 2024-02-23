import React, {useState} from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../App.css';
import logo from '../../assets/images/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [activeKey, setActiveKey] = useState('/');

    return (
        <Navbar bg="light" expand="lg" style={{zIndex: 9999}} className="mb-5">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width="90" height="40" className="d-inline-block align-top float-start" alt="React Bootstrap logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center w-100 fw-bold" activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Link to="/" eventKey="/" className="mx-3 custom-nav-link">Home</Nav.Link>
                        <NavDropdown
                            title="About"
                            id="basic-nav-dropdown"
                            className="mx-3 custom-nav-link text-center dropdown-center"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                            show={open}
                        >
                            <NavDropdown.Item as={Link} href="#ICLVE-2023" eventKey="#action/3.1">
                                ICLVE 2023
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about#CONFERENCE_TRACKS" href="#about/2" eventKey="#action/3.2">Conference
                                Tracks</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about#ImportantDates" href="#about/3" eventKey="#action/3.3">Important Dates</NavDropdown.Item>
                            <NavDropdown.Item href="#about/4" to="/about#ICLVECommittee" eventKey="#action/3.3">ICLVE Committee</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link to="/callForExtendedAbstracts" eventKey="/callForExtendedAbstracts"
                                  className="mx-3 custom-nav-link">Call For Extended Abstracts</Nav.Link>
                        <Nav.Link to="/preConference" eventKey="/preConference" className="mx-3 custom-nav-link">Pre
                            Conference</Nav.Link>
                        {/*<Nav.Link to="/registration" eventKey="/registration"*/}
                        {/*          className="mx-3 custom-nav-link">Registration</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
