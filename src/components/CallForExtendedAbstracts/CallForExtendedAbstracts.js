import React from 'react';
import headerImg from "../assets/images/NavHeading.svg";
import './CallForExtendedAbstracts.css';

export default function CallForExtendedAbstracts() {
    const openGoogleFormInNewTab = () => {
        window.open("https://forms.gle/jTBv2Yb2uFxiX9SG6", "_blank");
    };

    return (
        <div className="CallForExtendedAbstracts bg-white overflow-hidden w-100">
            <img src={headerImg} className="w-100"/>
            <div className="container mt-5">
                <h3 className="text-center text-uppercase section-title">Conference Tracks</h3>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <ul className="list-unstyled">
                            <li>Ethical Leadership and Values-Based Management</li>
                            <li>Living values for Spirituality</li>
                            <li>Educational Approaches for Values Integration</li>
                            <li>Technology and Values in the Workplace</li>
                            <li>Social Responsibility and Sustainable Practices</li>
                            <li>Global Perspectives on Living Values</li>
                        </ul>
                    </div>
                </div>
                <h3 className="text-center text-uppercase mt-5 section-title">Submission Guidelines</h3>
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <p>Authors are invited to submit extended abstracts related to the conference tracks. Submissions should focus on original research, case studies, and practical applications of living values education.</p>
                        <p>Documents that do not conform to the guidelines will be rejected.</p>
                        <p>Documents received after the given deadline, due to any reason, will not be accepted unless the deadline is extended.</p>
                    </div>
                </div>
                <h3 className="text-center text-uppercase mt-5 section-title">Submission Form</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4 text-center">
                        <button className="btn btn-primary btn-lg" onClick={openGoogleFormInNewTab}>Click Here</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
