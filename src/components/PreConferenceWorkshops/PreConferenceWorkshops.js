import React from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import Footer from "../Footer/Footer";
import ReactPlayer from 'react-player';
import "../Registration/Registration.css";

export default function PreConferenceWorkshops() {
    return (
        <>
            <Container className="text-center">
                <Row>
                    <Col xs={12}>
                        <h1 className="RegHead fw-bold mt-3">Pre Conference Workshops</h1>
                        <p className="mt-5">
                            The International Conference on Living Values Education 2024 (ICLVE) is a prestigious event, which is organized by the VOW Society of the Career Guidance Unit of the University of Sri Jayewardenepura and the International Centre for Multidisciplinary Studies of the Faculty of Humanities and Social Sciences with the collaborative efforts of the Association of Living Values Education.
                        </p>
                        <p className="mt-3">
                            ICLVE ‘24 articulates under the theme "Cultivating Living Values for Exquisite Professional Personality” and the Conference will focus on Living values and Career Development. There will be four Living Values related workshops under the following topics prior to the Conference.
                        </p>

                        <h2 className="mt-5 mb-3">Pre workshops :</h2>
                        <Table striped bordered hover className="yellowBg mb-5">
                            <thead>
                            <tr>
                                <th>Workshops</th>
                                <th>Topics</th>
                                <th>Resource Person/ Organization</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Introducing Living values education (Online platform)</td>
                                <td>Mr. T.T. Mayuran<br/>[ Director Center for Children Happiness (CCH) and country director Sri Lanka association of living values education ]</td>
                                <td>27th of April</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Exploring value based management in workplace i (Physical Program )</td>
                                <td>OREL IT</td>
                                <td>27th of  March</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Importance of living values for professional development (Online Platform)</td>
                                <td>Dr. Indujeewa Peiris</td>
                                <td>7th of April</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Exploring value based management in workplace ii</td>
                                <td>Barkavi Shanthikuamar & Mark Thrimawithana</td>
                                <td>3rd of April</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <h2 className="mt-5 mb-3 text-decoration-underline">Workshop 1</h2>
                        <p className="mt-3 text-decoration-underline">
                            Unlock Success Through Living Values Education!
                        </p>
                        <div className="video-wrapper">
                            <ReactPlayer
                                url="https://youtu.be/FLwrTEsMGzc"
                                width="auto"
                                height="600px"
                                controls={true}
                                config={{
                                    youtube: {
                                        playerVars: { showinfo: 1 }
                                    }
                                }}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <h2 className="mt-5 mb-3 text-decoration-underline">Workshop 2</h2>
                        <div>
                            <iframe src="https://drive.google.com/file/d/1k2iwvORa7QV1O2MrOhJKge1vVpQu_LJV/preview"
                                    width="100%" height="600" allow="autoplay"></iframe>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <h2 className="mt-5 mb-3 text-decoration-underline">Workshop 3</h2>
                        <p className="mt-3 text-decoration-underline">
                        Importance of living values for professional development
                        </p>
                        <div className="video-wrapper">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=Uzatc94cixo"
                                width="auto"
                                height="600px"
                                controls={true}
                                config={{
                                    youtube: {
                                        playerVars: { showinfo: 1 }
                                    }
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}
