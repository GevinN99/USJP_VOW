import React from 'react';
import headerImg from "../../assets/images/NavHeading.svg";
import './CallForExtendedAbstracts.css';
import Footer from "../Footer/Footer";

export default function CallForExtendedAbstracts() {
    const openGoogleFormInNewTab = () => {
        window.open("https://forms.gle/jTBv2Yb2uFxiX9SG6", "_blank");
    };

    return (
        <div className="CallForExtendedAbstracts bg-white overflow-hidden w-100">
            <img src={headerImg} className="w-100"/>
            <div className="container mt-5">
                <div className="row mt-5">
                    <h3 id="CONFERENCE_TRACKS" className="section-title text-center text-uppercase mt-5">Conference Tracks</h3>

                    <center>
                        <b className="p-tracks text-center align-self-center">
                            <p className="p-text">Ethical Leadership and Values-Based Management</p>
                            <p className="p-text">Living values for Spirituality</p>
                            <p className="p-text">Educational Approaches for Values Integration</p>
                            <p className="p-text">Technology and Values in the Workplace</p>
                            <p className="p-text">Social Responsibility and Sustainable Practices</p>
                            <p className="p-text">Global Perspectives on Living Values</p>
                        </b>
                    </center>
                </div>

                <h3 className="text-center text-uppercase mt-5 section-title">Submission Guidelines</h3>
                <div className="row justify-content-center mt-5">
                    <iframe src="https://drive.google.com/file/d/1TOGPs6Msc9Tf9dGtNLOVupHr_n1o_Z4-/preview" width="640"
                            height="600" allow="autoplay"></iframe>
                </div>
                <h3 className="text-center text-uppercase mt-5 section-title">Submission Form</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4 text-center mb-5">
                        <button className="btn btn-lg " style={{background: "orange"}}
                                onClick={openGoogleFormInNewTab}>Click Here
                        </button>
                    </div>
                </div>
            </div>
            <Footer className="mt-5"/>
        </div>
    );
}
