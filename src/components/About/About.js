import ICLVELogo from "../../assets/images/about_logo.svg";
import headerImg from "../../assets/images/NavHeading.svg";
import abtBtm from "../../assets/images/NavBtm.svg"
import ShapeMY from "../../assets/images/abt1.png";
import Shape2 from "../../assets/images/shape2.png";
import Shape3 from "../../assets/images/shape4.png";
import Shape4 from "../../assets/images/shape3.png";
import ConferenceTracks from "../../assets/images/ConferenceTracks.png";
import ImportantDates from "../../assets/images/ImportantDates.png";

import './About.css';
import Committee from "./Committee";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About () {
    return (
        <div className="About bg-white overflow-hidden w-100">
            <Container fluid className="p-0">
                <div className="absolute overflow-hidden">
                    <div className="absolute inset-0 justify-center mt-5">
                        <div className="bg-shape1 bg-1 opacity-c bg-blur mx-3 mt-5"></div>
                        <div className="bg-shape2 bg-2 opacity-c bg-blur mt-5"></div>
                        <div className="bg-shape1 bg-3 opacity-c bg-blur mt-5"></div>
                    </div>
                </div>
            </Container>
            <div>
                <img src={headerImg} className="w-100"/>
            </div>
            <img className="shape1" style={{width: 300}} src={ShapeMY} alt="Shape1"/>
            <img className="shape2 w-25" src={Shape2} alt="Shape2"/>
            <img className="shape3 w-25" src={Shape4} alt="Shape3"/>
            <img className="shape4 w-25" src={Shape3} alt="Shape4"/>
            <img className="ConferenceTracks w-25" src={ConferenceTracks} alt="ConferenceTracksImg"/>
            <img className="ImportantDates w-25" style={{width: 50}} src={ImportantDates} alt="ImportantDatesImg"/>

            <section id="ICLVE-2023">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <img className="w-100 h-100 rounded-5 " src={ICLVELogo} alt="ICLVE Logo"/>
                    </div>
                    <div className="col"></div>
                </div>

                <div className="ICLVE">
                    <center className="position-relative mt-5">

                        <div className="row w-75 text-center">
                            The International Conference on Living Values Education (ICLVE) stands as a pioneering
                            initiative launched by the esteemed Career Guidance Unit of the University of Sri
                            Jayewardenepura. Since its start in 2023, the conference has served as a beacon of
                            enlightenment, drawing together a diverse array of educators, scholars, practitioners, and
                            researchers from across the globe. With a steadfast commitment to advancing the
                            understanding
                            and application of values in education and professional development, the ICLVE has
                            established
                            itself as a premier platform for intellectual discourse, collaboration, and innovation.
                        </div>
                        <br/>
                        <div className="row w-75 text-center">
                            At its core, the ICLVE champions the transformative power of living values education—a
                            philosophy that recognises the profound influence of values in shaping individual identity,
                            guiding behaviour, and fostering holistic personal and professional development. By
                            exploring
                            the intersection of values, ethics, and career aspirations, the conference looks to empower
                            participants to navigate the complex terrain of the modern workplace with integrity,
                            purpose,
                            and resilience.
                        </div>
                        <br/>
                        <div className="row w-75 text-center">
                            The theme of the 2024 conference, "Cultivating Living Values for Exquisite Professional
                            Personality," reflects a deep commitment to delving into the multifaceted dimensions of
                            values-based education and its impact on the cultivation of exemplary professional
                            character.
                            Through a rich tapestry of keynote speeches, panel discussions, workshops, and interactive
                            sessions, attendees will have the opportunity to engage with leading experts and thought
                            leaders
                            in the field, gaining invaluable insights, strategies, and best practices for integrating
                            values
                            into their educational pedagogy and career guidance initiatives.
                        </div>
                        <div className="row w-75 text-center pt-3">
                            Moreover, the collaborative efforts of the Faculty of Social Sciences and Humanities of the
                            University of Sri Jayewardenepura and the esteemed Association of Living Values Education
                            (ALIVE) in Hong Kong underscore the global significance and reach of the ICLVE. By fostering
                            cross-cultural dialogue and knowledge exchange, the conference serves as a catalyst for
                            positive
                            change, inspiring participants to become catalysts for ethical leadership, social
                            responsibility, and sustainable development in their respective communities and professions.
                        </div>
                        <div className="row w-75 text-center pt-3">
                            As we embark on this transformative journey of discovery and enlightenment, the ICLVE
                            invites
                            you to join us in reimagining the future of education and professional development—one
                            guided by
                            the timeless principles of integrity, compassion, and excellence. Together, let us cultivate
                            a
                            world where living values serve as the cornerstone of individual flourishing and collective
                            prosperity.
                        </div>
                    </center>
                </div>
            </section>

            <section id="CONFERENCE_TRACKS">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12 col-md-8 text-center">
                        <h3 className="text-uppercase mt-5">Conference Tracks</h3>
                        <div className="p-tracks align-self-center">
                            <p className="p-text">Ethical Leadership and Values-Based Management</p>
                            <p className="p-text">Living values for Spirituality</p>
                            <p className="p-text">Educational Approaches for Values Integration</p>
                            <p className="p-text">Technology and Values in the Workplace</p>
                            <p className="p-text">Social Responsibility and Sustainable Practices</p>
                            <p className="p-text">Global Perspectives on Living Values</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ImportantDates">
                <div className="mt-5">
                    <h3 className="text-center text-uppercase mb-4">Important Dates</h3>
                    <center>

                        <div className="row date-box ">
                            <div className="col ">
                                <p>18th of March 2024</p>
                            </div>
                            <div className="col">
                                <p>Calling for extended abstracts</p>
                            </div>
                        </div>

                        <div className="row date-box">
                            <div className="col">
                                <p>30th of April 2024</p>
                            </div>
                            <div className="col">
                                <p>Deadline of the Submission of the extended Abstract</p>
                            </div>
                        </div>

                        <div className="row date-box">
                            <div className="col">
                                <p>30th May 2024</p>
                            </div>
                            <div className="col">
                                <p>The Review of extended abstracts</p>
                            </div>
                        </div>

                        <div className="row date-box">
                            <div className="col">
                                <p>15th of June 2024</p>
                            </div>
                            <div className="col">
                                <p>Submission of revised abstracts</p>
                            </div>
                        </div>

                        <div className="row date-box">
                            <div className="col">
                                <p>30th of June 2024</p>
                            </div>
                            <div className="col">
                                <p>Notification of acceptance of extended abstracts</p>
                            </div>
                        </div>

                        <div className="row date-box">
                            <div className="col">
                                <p>15th of July 2024</p>
                            </div>
                            <div className="col">
                                <p>Registration for abstract Presentation</p>
                            </div>
                        </div>

                        <div className="row date-box">
                            <div className="col">
                                <p>21th August - 23rd August 2024</p>
                            </div>
                            <div className="col">
                                <p>Conference dates</p>
                            </div>
                        </div>
                    </center>
                </div>
            </section>

            <section id="conference-venue">
                <Container className="venue-text-center mt-5">
                    <h2 className="mb-5">Conference Venue</h2>
                    <Row className="h-100">
                        <Col xs={12} md={4}>
                            <Card className="mb-4 h-100 d-flex flex-column">
                                <Card.Body className="flex-grow-1">
                                    <Card.Title><h2 className="y-text">Free Conference</h2></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"><h3
                                        className="lead">21<sup>st</sup> August 2024</h3></Card.Subtitle>
                                    <Card.Text><p className="text-secondary">Sumangala building - University of Sri
                                        Jayewardenepura</p></Card.Text>
                                </Card.Body>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1231.8732751104858!2d79.90536726797065!3d6.854148832145871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a88fda7c443%3A0xd2c9266839c8deac!2sSumangala%20Building!5e0!3m2!1sen!2slk!4v1710740469672!5m2!1sen!2slk"></iframe>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="mb-4 h-100 d-flex flex-column">
                                <Card.Body className="flex-grow-1">
                                    <Card.Title><h2 className="y-text">Main Conference</h2></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"><h3
                                        className="lead">22<sup>nd</sup> August 2024</h3></Card.Subtitle>
                                    <Card.Text><p className="text-secondary">Colombo, Sri Lanka</p></Card.Text>
                                </Card.Body>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58638744405!2d79.7738030325544!3d6.922001981332362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1710741223943!5m2!1sen!2slk"></iframe>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="mb-4 h-100 d-flex flex-column">
                                <Card.Body className="flex-grow-1">
                                    <Card.Title><h2 className="y-text">Post Conference</h2></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"><h3
                                        className="lead">23<sup>rd</sup> August 2024</h3></Card.Subtitle>
                                    <Card.Text><p className="text-secondary">Mithrigala Nissarana Vanaya, Mitirigala,
                                        Sri Lanka</p></Card.Text>
                                </Card.Body>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1007944119665!2d80.16968787448324!3d6.997410117475871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae300a45db8f1b7%3A0xed2afe268aaaeb9e!2sMitirigala%20Nissarana%20Forest%20Temple!5e0!3m2!1sen!2slk!4v1710741769943!5m2!1sen!2slk"></iframe>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section id="committee">
                <div id="committee">
                    <Committee/>
                </div>
            </section>

            <div className="mt-5">
                <img src={abtBtm} className="w-100"/>
            </div>
            <Footer/>
        </div>
    );
}