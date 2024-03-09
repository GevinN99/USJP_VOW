import React from 'react';
import {Container, Table} from 'react-bootstrap';
import '../../App.css';
import Footer from "../Footer/Footer";

export default function Registration() {
    return (
        <Container className="mt-5 text-center">
            <h1>Conference Registration</h1>
            <p >All conference participants must pay the conference registration fee. For each extended abstract, at
                least one author must attend and pay the registration fee. Delegates can choose any of the options given
                below to participate at the Conference.</p>

            <div className="text-center align-content-between justify-content-between">
                <h2>Payment Methods</h2>
                <span>Bank Transfer</span>
                <span>Account Name:</span> <span>Values of the Wise Society</span>
                <span>Bank:</span> <span>People's Bank</span>
                <span>Branch:</span> <span>Gangodawila Branch</span>
                <span>Account Number:</span> <span>097200180028108</span>
            </div>

            <h2 className="mb-3">Registration Deadlines & Fees</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Type of Participants</th>
                    <th>Fee (Local Authors)</th>
                    <th>Fee (Foreign Authors)</th>
                </tr>
                </thead>
                <tbody>
                {/* Add rows here */}
                </tbody>
            </Table>

            <h2 className="mt-5">Conference Registration Fee Include</h2>
                <div className="p-text">Admission to research sessions</div>
                <div className="p-text">All conference materials</div>
                <div className="p-text">Tea/coffee and lunch</div>
                <div className="p-text">Certificate of Attendance</div>

            <h2>Cancellation Policy</h2>
            <p>The registration fees shall not be refundable in case of any cancellation or non-attendance due to any
                form of personal faults.</p>

            <Footer/>
        </Container>
    );
}
