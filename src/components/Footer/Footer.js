import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {FaFacebookSquare, FaGoogle, FaInstagram, FaLinkedin} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import '../../App.css';
import UniLogo from '../../assets/images/Uni_logo.png';
import CGULogo from '../../assets/images/Cgu_logo.png';
import VOWLogo from '../../assets/images/Logo.png';

export default function Footer() {
    return (
        <footer className="card-footer text-center text-lg-start bg-white">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <div className="icon-footer">
                        <a href="https://www.facebook.com/profile.php?id=100093159990218" className="me-4 text-reset">
                            <FaFacebookSquare/>
                        </a>
                        <a href="vowsociety.usjp@gmail.com" className="me-4 text-reset">
                            <FaGoogle/>
                        </a>
                        {/*<a href="" className="me-4 text-reset">*/}
                        {/*    <FaInstagram />*/}
                        {/*</a>*/}
                        {/*<a href="" className="me-4 text-reset">*/}
                        {/*    <FaLinkedin />*/}
                        {/*</a>*/}
                    </div>
                </div>
            </section>
            <section>
                <Container className="text-center text-md-start mt-5">
                    <Row className="mt-3">
                        <Col>
                                <Row>
                                    <Col xs={6} md={2}><img src={UniLogo} alt="UniLogo" className="img-fluid " st/></Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={2}><img src={VOWLogo} alt="VOWLogo" className="img-fluid" /></Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={2}><img src={CGULogo} alt="CGULogo" className="img-fluid" /></Col>
                                </Row>
                        </Col>

                        <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            {/* Add your useful links here */}
                        </Col>
                        <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                © 2024 Copyright:
                <a className="text-reset fw-bold" href="#!">YourWebsiteName</a>
            </div>
        </footer>
    );
}