import ICLVELogo from "../../assets/images/about_logo.svg";
import headerImg from "../../assets/images/NavHeading.svg";
import abtBtm from "../../assets/images/NavBtm.svg"
import ShapeMY from "../../assets/images/abt1.png";
import Shape2 from "../../assets/images/shape2.png";
import Shape3 from "../../assets/images/shape4.png";
import Shape4 from "../../assets/images/shape3.png";

import './About.css';
import Committee from "./Committee";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import React from "react";
import {Container} from "react-bootstrap";

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

            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <img className="w-100 h-100 rounded-5 " src={ICLVELogo} alt="ICLVE Logo"/>
                </div>
                <div className="col"></div>
            </div>

            <div id="ICLVE-2023" className="ICLVE">
                <center className="position-relative mt-5">

                    <div className="row w-75 text-center">
                        The International Conference on Living Values Education (ICLVE) stands as a pioneering
                        initiative launched by the esteemed Career Guidance Unit of the University of Sri
                        Jayewardenepura. Since its start in 2023, the conference has served as a beacon of
                        enlightenment, drawing together a diverse array of educators, scholars, practitioners, and
                        researchers from across the globe. With a steadfast commitment to advancing the understanding
                        and application of values in education and professional development, the ICLVE has established
                        itself as a premier platform for intellectual discourse, collaboration, and innovation.
                    </div>
                    <br/>
                    <div className="row w-75 text-center">
                        At its core, the ICLVE champions the transformative power of living values education—a
                        philosophy that recognises the profound influence of values in shaping individual identity,
                        guiding behaviour, and fostering holistic personal and professional development. By exploring
                        the intersection of values, ethics, and career aspirations, the conference looks to empower
                        participants to navigate the complex terrain of the modern workplace with integrity, purpose,
                        and resilience.
                    </div>
                    <br/>
                    <div className="row w-75 text-center">
                        The theme of the 2024 conference, "Cultivating Living Values for Exquisite Professional
                        Personality," reflects a deep commitment to delving into the multifaceted dimensions of
                        values-based education and its impact on the cultivation of exemplary professional character.
                        Through a rich tapestry of keynote speeches, panel discussions, workshops, and interactive
                        sessions, attendees will have the opportunity to engage with leading experts and thought leaders
                        in the field, gaining invaluable insights, strategies, and best practices for integrating values
                        into their educational pedagogy and career guidance initiatives.
                    </div>
                    <div className="row w-75 text-center pt-3">
                        Moreover, the collaborative efforts of the Faculty of Social Sciences and Humanities of the
                        University of Sri Jayewardenepura and the esteemed Association of Living Values Education
                        (ALIVE) in Hong Kong underscore the global significance and reach of the ICLVE. By fostering
                        cross-cultural dialogue and knowledge exchange, the conference serves as a catalyst for positive
                        change, inspiring participants to become catalysts for ethical leadership, social
                        responsibility, and sustainable development in their respective communities and professions.
                    </div>
                    <div className="row w-75 text-center pt-3">
                        As we embark on this transformative journey of discovery and enlightenment, the ICLVE invites
                        you to join us in reimagining the future of education and professional development—one guided by
                        the timeless principles of integrity, compassion, and excellence. Together, let us cultivate a
                        world where living values serve as the cornerstone of individual flourishing and collective
                        prosperity.
                    </div>
                </center>
            </div>

            <div className="row mt-5">
                <h3 id="CONFERENCE_TRACKS" className=" text-center text-uppercase mt-5">Conference
                    Tracks</h3>

                <div className="col-12 text-center">
                    <div className="p-tracks text-center align-self-center">
                        <p className="p-text">Ethical Leadership and Values-Based Management</p>
                        <p className="p-text">Living values for Spirituality</p>
                        <p className="p-text">Educational Approaches for Values Integration</p>
                        <p className="p-text">Technology and Values in the Workplace</p>
                        <p className="p-text">Social Responsibility and Sustainable Practices</p>
                        <p className="p-text">Global Perspectives on Living Values</p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h3 id="ImportantDates" className="text-center text-uppercase mb-4">Important Dates</h3>
                <center>
                    <div className="row date-box ">
                        <div className="col ">
                            <p>27th February 2024</p>
                        </div>
                        <div className="col">
                            <p>Calling for extended abstracts</p>
                        </div>
                    </div>

                    <div className="row date-box">
                        <div className="col">
                            <p>22nd of April 2024</p>
                        </div>
                        <div className="col">
                            <p>Deadline of the Submission of the extended Abstract</p>
                        </div>
                    </div>

                    <div className="row date-box">
                        <div className="col">
                            <p>22nd May 2024</p>
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
                            <p>26th August - 28th August 2024</p>
                        </div>
                        <div className="col">
                            <p>Conference dates</p>
                        </div>
                    </div>
                </center>
            </div>

            <div className="text-center mt-5">
                <h1>Conference Venue</h1>

                <h4 className="mt-5">Free Conference :</h4>
                <h2 className="v-text">26<sup>th</sup> August 2024</h2>
                <h3 className="v-1-text">Sumangala building - University of Sri Jayewardenepura</h3>

                <h4 className="mt-5">Main Conference :</h4>
                <h2 className="v-text">27<sup>th</sup> August 2024</h2>
                <h3 className="v-1-text">Galle Face Hotel, Sri Lanka</h3>

                <h4 className="mt-5">Post Conference :</h4>
                <h2 className="v-text">28<sup>th</sup> August 2024</h2>
                <h3 className="v-1-text">Mithrigala Nissarana Vanaya, Mitirigala, Sri Lanka</h3>


            </div>

            <div id="committee">
                <Committee/>
            </div>

            <div className="mt-5">
                <img src={abtBtm} className="w-100"/>
            </div>
        </div>
    );
}