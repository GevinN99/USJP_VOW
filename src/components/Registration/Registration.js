import React from 'react';
import {Container, Table} from 'react-bootstrap';
import '../../App.css';
import Footer from "../Footer/Footer";
import RegBg from "../../assets/images/RegBg.png";
import RegistrationFee from "../../assets/images/RegistrationFee.png";
import './Registration.css';

export default function Registration() {
    return (
        <>
            <Container className=" text-center">
                <img className="RegistrationFee" style={{width: 300}} src={RegistrationFee} alt="RegistrationFee"/>
                <img className="RegBg" style={{width: 300}} src={RegBg} alt="RegBg"/>
                <h1 className="RegHead fw-bold">Conference Registration</h1>
                <p>All conference participants must pay the conference registration fee. For each extended abstract, at least one author must attend and pay the registration fee. Delegates can choose any of the options given below to participate at the Conference.</p>
                <div className="d-flex justify-content-center">
                    <div className="card text-center mt-5 w-50">
                        <div className="card-header">
                            <h2>Payment Methods</h2>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Method:</strong> Bank Transfer</li>
                            <li className="list-group-item"><strong>Account Name:</strong> Values of the Wise Society </li>
                            <li className="list-group-item"><strong>Bank:</strong> People's Bank</li>
                            <li className="list-group-item"><strong>Branch:</strong> Gangodawila Branch</li>
                            <li className="list-group-item"><strong>Account Number:</strong> 097200180028108</li>
                        </ul>
                    </div>
                </div>
                <h2 className="mt-5 mb-3">Registration Deadlines & Fees</h2>
                <Table striped bordered hover className="yellowBg">
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Fee (Local Authors)</th>
                        <th>Fee (Foreign Authors)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Registration Fee (Before 01st February, 2024)</td>
                        <td>LKR 3000.00</td>
                        <td>USD 20</td>
                    </tr>
                    <tr>
                        <td>Registration (PhD Colloquium) – Note</td>
                        <td>LKR 2000.00</td>
                        <td>USD 15</td>
                    </tr>
                    <tr>
                        <td>Pre conference workshops – 1 day pass</td>
                        <td>LKR 3000.00</td>
                        <td>USD 20</td>
                    </tr>
                    <tr>
                        <td>Pre conference workshops – 2 days pass</td>
                        <td>LKR 5000.00</td>
                        <td>USD 35</td>
                    </tr>
                    </tbody>
                </Table>
                <h2 className="mt-5 mb-3 ">Conference Registration Fee Include</h2>
                <center>
                    <div className="reg-text w-50">Admission to research sessions</div>
                    <div className="reg-text ">All conference materials</div>
                    <div className="reg-text ">Tea/coffee and lunch</div>
                    <div className="reg-text ">Certificate of Attendance</div>
                </center>

                <h2 className="mt-5">Cancellation Policy</h2>
                <p>The registration fees shall not be refundable in case of any cancellation or non-attendance due to any form of personal faults.</p>
            </Container>
            <Footer/>
        </>
    );
}
