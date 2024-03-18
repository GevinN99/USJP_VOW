import React from 'react';
import headerImg from "../../assets/images/NavHeading.svg";
import './CallForExtendedAbstracts.css';
import Footer from "../Footer/Footer";
import ConferenceTracks from "../../assets/images/ConferenceTracks.png";

export default function CallForExtendedAbstracts() {
    const openGoogleFormInNewTab = () => {
        window.open("https://forms.gle/jTBv2Yb2uFxiX9SG6", "_blank");
    };

    return (
        <div className="CallForExtendedAbstracts bg-white overflow-hidden w-100">
            <img className="ConferenceTracks-2 w-25" src={ConferenceTracks} alt="ConferenceTracksImg"/>
            <img src={headerImg} className="img-fluid"/>
            <div className="container ">
                <div className="row mt-5">
                    <h3 className=" text-center text-uppercase mt-5">Conference
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
                <h3 className=" text-center text-uppercase mt-5">Submission Guidelines</h3>
                <div className="row justify-content-center mt-5">
                    <iframe src="https://drive.google.com/file/d/1TOGPs6Msc9Tf9dGtNLOVupHr_n1o_Z4-/preview" width="640"
                            height="600" allow="autoplay"></iframe>
                </div>
                <h3 className="text-center text-uppercase mt-5">Submission Form</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4 text-center mb-5">
                        <button className="btn btn-lg btn-warning" onClick={openGoogleFormInNewTab}>Click Here</button>
                    </div>
                </div>
            </div>
            <Footer className="mt-5"/>
        </div>
    );
}
