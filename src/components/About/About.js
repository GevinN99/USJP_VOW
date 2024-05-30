import ICLVELogo from "../../assets/images/about_logo.svg";
import headerImg from "../../assets/images/NavHeading.svg";
import abtBtm from "../../assets/images/NavBtm.svg"
import ShapeMY from "../../assets/images/abt1.png";
import Shape2 from "../../assets/images/shape2.png";
import Shape3 from "../../assets/images/shape4.png";
import Shape4 from "../../assets/images/shape3.png";
import DrAnandSingh from "../../assets/images/DrAnandSingh.png";
import ConferenceTracks from "../../assets/images/ConferenceTracks.png";
import ImportantDates from "../../assets/images/ImportantDates.png";
import DrRohanaUlluwishewa from "../../assets/images/Committee/DrRohanaUlluwishewa.png";
import ProfIndralalDeSilva from "../../assets/images/Committee/ProfIndralalDeSilva.png";

import './About.css';
import Committee from "./Committee";
import Footer from "../Footer/Footer";
import React from "react";
import {Card, Col, Container, Row} from 'react-bootstrap';

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
                            Jayewardenepura. Since its start in 2024, the conference has served as a beacon of
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
                            Moreover, VOW society is organizing this event with international Center for
                            Multidisciplinary studies , FHSS, university of Sri Jayewardenepura and the esteemed
                            center for children happiness (CCH) and Sri Lanka association of living values education
                            underscore the global significance and reach of the ICLVE. By fostering
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
                            <p className="p-text">Educational Approaches for Values Integration</p>
                            <p className="p-text">Ethical Leadership and Values-Based Management</p>
                            <p className="p-text">Spirituality in Education for Living Values</p>
                            <p className="p-text">Technology /AI and Values in the Workplace</p>
                            <p className="p-text">Social Responsibility and Sustainable Practices</p>
                            <p className="p-text">Global Perspectives on Living Values Education</p>
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
                                <p className="text-decoration-line-through">30th of April 2024</p>
                                <p >30th of April 2024</p>
                            </div>
                            <div className="col">
                                <p>Deadline of the Submission of the extended Abstract</p>
                            </div>
                        </div>

                        <div className="row date-box">
                            <div className="col">
                                <p className="text-decoration-line-through">30th May 2024</p>
                                <p>16th June 2024</p>
                            </div>
                            <div className="col">
                                <p>The Review of extended abstracts</p>
                            </div>
                        </div>

                        <div className="row date-box">
                            <div className="col">
                                <p className="text-decoration-line-through">15th June 2024</p>
                                <p>25th June 2024</p>
                            </div>
                            <div className="col">
                                <p>Submission of revised abstracts</p>
                            </div>
                        </div>

                        <div className="row date-box">
                            <div className="col">
                                <p className="text-decoration-line-through">30th of June 2024</p>
                                <p>5th July 2024</p>
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
                                <p>Registration for Presentation and Participation</p>
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

            {/*key note speaker*/}
            <section id="key-note-speaker mb-5 mt-5">
                <div className="container mt-5 text-center">
                    <h2 className=" mb-4 mt-4">Keynote Speaker</h2>
                    <div className="row justify-content-center">
                        <div
                            className="col-lg-4 col-md-6 mb-4 col-sm-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                            <img src={DrAnandSingh} className="w-100 rounded-5 my-3" alt="Keynote Speaker"/>
                            <h5>Dr. Anand Singh</h5>
                        </div>
                        <p>Dr. Anand Singh has a distinguished career in the field of Buddhist studies, with a focus on
                            narrative literature, environmentalism, and sacred geography. Holding an M.A. and Ph.D. in
                            Ancient Indian History and Archaeology, he has held various academic positions, including
                            professorships at prestigious institutions like Nalanda University and Gautam Buddha
                            University.
                        </p>
                        <p>His research interests span a wide range of topics, from Buddhist narrative literature to the
                            sacred geography of Buddhism. He has received several awards for his outstanding
                            contributions to the field, including recognition for his books on ecological paradigms in
                            Buddhism and reciprocity in Buddhist patronage.
                        </p>
                        <p>Dr. Singh's international exposure is extensive, with invited talks, lectures, and
                            participation in conferences across countries like Sri Lanka, Thailand, Vietnam, and
                            Cambodia. He has also supervised numerous M.Phil. and Ph.D. students, contributing
                            significantly to the academic community.
                        </p>
                        <p>
                            Additionally, Dr. Singh has organized international conferences on Buddhist traditions,
                            ideologies, and dissent, showcasing his leadership in academic initiatives. His
                            publications, comprising books, journals, book chapters, and articles, demonstrate his
                            profound scholarly contributions to the understanding of Buddhism and its various
                            dimensions.
                        </p>
                        <p>
                            In summary, Dr. Anand Singh's academic journey reflects a deep commitment to advancing
                            knowledge in Buddhist studies, environmentalism, and related fields, along with a rich
                            history of academic achievements, research projects, and international collaborations.
                        </p>
                    </div>
                </div>
            </section>

            {/*key note speaker*/}
            <section id="key-note-speaker" className="my-5">
                <div className="container text-center">
                    <h2 className="mb-4 mt-4">Plenary Speaker</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-4">
                            <div className="card shadow h-100 p-3 m-2">
                                <img src={DrRohanaUlluwishewa} className="card-img-top w-50 mx-auto rounded-5 shadow"
                                     alt="Dr. Rohana Ulluwishewa"/>
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Rohana Ulluwishewa</h5>
                                    <p className="card-text">
                                        <strong>Name:</strong> Rohana Ulluwishewa<br/>
                                        <strong>Designation:</strong> Retired Professor/Independent Researcher and
                                        Writer<br/>
                                        <strong>Address:</strong> No 20, Heatley Avenue, Hokowhitu, Palmerston North,
                                        New Zealand<br/>
                                        <strong>Contact No:</strong> +64225029352<br/>
                                        <strong>Email:</strong> ulluwishewa@xtra.co.nz
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card shadow h-100 p-3 m-2">
                                <img src={ProfIndralalDeSilva} className="card-img-top w-50 mx-auto rounded-5 shadow"
                                     alt="Prof. Indralal De Silva"/>
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Indralal De Silva</h5>
                                    <p className="card-text">
                                        Indralal De Silva obtained his Bachelor's Degree in Development Studies
                                        (majoring in Statistics) from the University of Colombo in 1977, joined the
                                        Department of Demography in 1979, and served four decades at the University of
                                        Colombo. He received a Diploma in Population Studies in 1980 from the
                                        International Institute of Population Sciences (Deemed University), Mumbai with
                                        a scholarship from the UN-ESCAP. He obtained an MA and PhD from the Australian
                                        National University in 1985 and 1990 respectively, with scholarships from the
                                        same university.
                                    </p>
                                    <p className="card-text">
                                        He was appointed as Associate Professor in Demography in 1995, and the Founder
                                        Chair Professor of Demography in 2001, a position he held for 16 years at the
                                        University of Colombo. In recognition of his administrative contribution to the
                                        University, he was appointed to the post of Dean of the Faculty of Arts. He
                                        functioned during 2009-2011 and acted as Vice Chancellor of the University of
                                        Colombo on several occasions. He served as the Head of the Department of
                                        Demography for approximately six years and also functioned as a Senior Research
                                        Fellow in the National Centre for Advanced Studies in Humanities and Social
                                        Sciences (NCAS) of UGC in 2014, 2015, and 2018.
                                    </p>
                                    <p className="card-text">
                                        He served as the Executive Director and Associate Director at the Regional
                                        Centre for Strategic Studies (RCSS), Colombo, in 2017 and 2019. Further, he has
                                        served as a member of various Councils of Management including the University of
                                        Colombo. He was offered several prestigious fellowships, including the Senior
                                        Fulbright, Takemi, and Rockefeller Foundation and National University of
                                        Singapore. With these recognitions, he has functioned as a Research Fellow at
                                        the National University of Singapore in 2004, Harvard School of Public Health
                                        during 1996-1998, and at the Australian National University during 1990-1991.
                                    </p>
                                    <p className="card-text">
                                        He has published many books, monographs, and chapters and has presented over 100
                                        research papers in many international and local conferences. He has also
                                        published over 100 research articles in reputed local and international journals
                                        and achieved by now over 1100 Google Scholar Citations, which boost the status
                                        and recognition of the University of Colombo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <Card.Text><p className="text-secondary">Galle Face Hotel, Colombo, Sri Lanka</p>
                                    </Card.Text>
                                </Card.Body>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7497127723327!2d79.8459888!3d6.9204959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25938b3cdedd9%3A0x2fc02ccdd031c180!2sGalle%20Face%20Hotel!5e0!3m2!1sen!2slk!4v1713435228760!5m2!1sen!2slk"></iframe>
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