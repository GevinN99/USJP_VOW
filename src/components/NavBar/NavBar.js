import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import '../../App.css';
import logo from '../../assets/images/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [activeKey, setActiveKey] = useState('/');

    return (
        <Navbar bg="light" expand="lg" style={{ zIndex: 9999, position: 'sticky', top: 0 }} className="">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="90"
                        height="40"
                        className="d-inline-block align-top float-start"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center w-100 fw-bold" activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Link as={Link} to="/" className="mx-3 custom-nav-link">Home</Nav.Link>
                        <NavDropdown
                            title="About"
                            id="basic-nav-dropdown"
                            className="mx-3 custom-nav-link text-center dropdown-center"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                            show={open}
                        >
                            <NavDropdown.Item as={ScrollLink} to="ICLVE-2023" smooth={false} className="dropdown-item">
                                ICLVE 2023
                            </NavDropdown.Item>
                            <NavDropdown.Item as={ScrollLink} to="CONFERENCE_TRACKS" smooth={false} className="dropdown-item">
                                Conference Tracks
                            </NavDropdown.Item>
                            <NavDropdown.Item as={ScrollLink} to="ImportantDates" smooth={false} className="dropdown-item">
                                Important Dates
                            </NavDropdown.Item>
                            <NavDropdown.Item as={ScrollLink} to="committee" smooth={false} className="dropdown-item">
                                ICLVE Committee
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/call-for-extended-abstracts" className="mx-3 custom-nav-link">
                            Call For Extended Abstracts
                        </Nav.Link>
                        <Nav.Link as={Link} to="/preConference" className="mx-3 custom-nav-link">
                            Pre Conference Workshops
                        </Nav.Link>
                        <Nav.Link as={Link} to="/history" className="mx-3 custom-nav-link">
                            History
                        </Nav.Link>
                        <Nav.Link as={Link} to="/registration" className="mx-3 custom-nav-link">
                            Registration
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
