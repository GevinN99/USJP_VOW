import React from 'react';
import {Container, Table} from 'react-bootstrap';
import Footer from "../Footer/Footer";
import "../Registration/Registration.css";

export default function PreConferenceWorkshops() {
    return (
        <>
            <Container className=" text-center">
                <h1 className="RegHead fw-bold mt-3">Pre Conference Workshops</h1>
                <p className="mt-5">
                    The International Conference on Living Values Education 2024 (ICLVE) is a prestigious event, which is organized by the VOW Society of Career Guidance Unit, University of Sri Jayewardenepura in collaboration with Association for Living Values Education International ("ALIVE") Hong Kong, and International Center for Multidisciplinary Studies, Faculty of Humanities and Social Sciences of University of Sri Jayewardenepura from 21st to 23rd August 2024 in Colombo, Sri Lanka.
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
                        <td>ALIVE</td>
                        <td>4th  week of  March</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Exploring value based management in workplace i (Physical Program )</td>
                        <td>OREL IT</td>
                        <td>3rd week of  May</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Importance of living values for professional development (Online Platform)</td>
                        <td>University of New England</td>
                        <td>3rd week of April</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Exploring value based management in workplace ii (online Platform)</td>
                        <td>MAS Holdings</td>
                        <td>3rd week of June</td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
            <Footer/>
        </>
    );
}
