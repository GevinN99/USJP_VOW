import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {FaFacebookSquare, FaPhone} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import UniLogo from '../../assets/images/Uni_logo.png';
import CGULogo from '../../assets/images/Cgu_logo.png';
import VOWLogo from '../../assets/images/Logo.png';
import '../../App.css';

export default function Footer() {
    return (
        <footer className="card-footer text-center text-lg-start bg-light">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <div className="icon-footer">
                        <a href="https://www.facebook.com/profile.php?id=100093159990218" className="me-4 text-reset">
                            <FaFacebookSquare />
                        </a>
                    </div>
                </div>
            </section>
            <section>
                <Container className="text-center text-md-start mt-5">
                    <Row className="mt-4">
                        <Col className="d-flex justify-content-center me-5 mb-4" xs={12} md={4} lg={3}>
                            <center>
                                <Row>
                                    <a href="https://www.sjp.ac.lk/">
                                        <img src={UniLogo} alt="UniLogo" className="img-fluid mx-auto mb-4"
                                             style={{ maxWidth: '400px' }} />
                                    </a>
                                </Row>
                                <Row>
                                    <img src={VOWLogo} alt="VOWLogo" className="img-fluid mx-auto mb-4"
                                         style={{ maxWidth: '300px' }} />
                                </Row>
                                <Row>
                                    <a href="https://career.sjp.ac.lk/">
                                        <img src={CGULogo} alt="CGULogo" className="img-fluid mx-auto mb-3"
                                             style={{ maxWidth: '250px' }} />
                                    </a>
                                </Row>
                            </center>
                        </Col>
                        <Col className="mx-auto mb-4 justify-content-center" xs={12} md={4} lg={3}>
                            <div className="d-flex flex-column align-items-start">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <a href="https://www.facebook.com/profile.php?id=100093159990218"
                                   className="me-4 text-reset mb-3">
                                    <FaFacebookSquare /> Facebook
                                </a>
                                <a href="https://career.sjp.ac.lk/" className="me-4 text-reset mb-3">
                                    <TbWorld /> Career Guidance Unit - USJ
                                </a>
                                <a href="https://www.sjp.ac.lk/" className="me-4 text-reset mb-3">
                                    <TbWorld /> University of Sri Jayewardenepura, Sri Lanka
                                </a>
                                <a href="https://iclve24.info/" className="me-4 text-reset mb-3">
                                    <TbWorld /> ICLVE24
                                </a>
                            </div>
                        </Col>
                        <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <div className="border rounded-3 p-3 mb-3 contact-box">
                                <p className="contact-title">Mrs. H.M.S. Niroshani</p>
                                <p className="contact-info">Career Guidance Unit, University of Sri Jayewardenepura</p>
                                <p className="contact-info"><FaPhone/><i className="fas fa-phone me-3"></i> +94 71700 8793</p>
                            </div>
                            <div className="border rounded-3 p-3 mb-3 contact-box">
                                <p className="contact-title">Mr. C. Ruwanthilaka</p>
                                <p className="contact-info">University of Sri Jayewardenepura</p>
                                <p className="contact-info"><FaPhone/><i className="fas fa-phone me-3"></i> +94 71 055 1698</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="text-center p-4" style={{ backgroundColor: "#f8f9fa" }}>
                © 2024 Copyright  :
                <a className="text-reset fw-bold" href="https://iclve24.info/"> ICLVE24.info</a>
            </div>
        </footer>
    );
}
