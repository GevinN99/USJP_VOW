import ICLVELogo from "../../assets/images/about_logo.svg";
import headerImg from "../../assets/images/NavHeading.svg";
import abtBtm from "../../assets/images/NavBtm.svg"
import ShapeMY from "../../assets/images/abt1.png";
import Shape2 from "../../assets/images/shape2.png";
import Shape3 from "../../assets/images/shape4.png";
import Shape4 from "../../assets/images/shape3.png";

import './About.css';

export default function About () {
    return (
        <div className="About bg-white overflow-hidden w-100">
            <div className="mt-5">
                <img src={headerImg} className="w-100"/>
            </div>
            <img className="shape1" style={{width:300}} src={ShapeMY} alt="Shape1"/>
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
                        The International Conference in Living Values Education (ICLVE) is an initiative, launched by
                        the
                        Career Guidance Unit of the University of Sri Jayewardenepura.
                    </div>
                    <br/>
                    <div className="row w-75 text-center">
                        Our journey began in 2023 with the vision of bringing educators, scholars, practitioners, and
                        researchers under one platform to explore and discuss the integral role of values in shaping
                        resilient and principled professionals.
                    </div>
                    <br/>
                    <div className="row w-75 text-center">
                        Living values education serves as guiding principles for career development, helping individuals
                        align their professional choices with personal beliefs and ethics. The ICLVE of 2024 is to be
                        held
                        under the theme of “Cultivating Living Values for Exquisite Professional Personality”, exploring
                        deeper into the significance of values in fostering professional excellence and personal
                        fulfillment
                        with the collaborative efforts of the Faculty of Social Sciences & Humanities of the University
                        of
                        Sri Jayewardenepura and the Association of Living Values Education (ALIVE) in Hong Kong.
                    </div>

                </center>
            </div>

            <div className="row mt-5">
                <h3 id="CONFERENCE_TRACKS" className="text-center text-uppercase mt-5">Conference Tracks</h3>

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

            <div className="mt-5">
                <h3 id="ImportantDates" className="text-center text-uppercase">Important Dates</h3>
                <center>
                    <div className="row date-box ">
                        <div className="col ">
                            <p>June 30, 2024</p>
                        </div>
                        <div className="col">
                            <p>Calling for Abstract</p>
                        </div>
                    </div>

                    <div className="row date-box">
                        <div className="col">
                            <p>June 30, 2024</p>
                        </div>
                        <div className="col">
                            <p>Deadline of the Submission of the Abstract</p>
                        </div>
                    </div>

                    <div className="row date-box">
                        <div className="col">
                            <p>June 30, 2024</p>
                        </div>
                        <div className="col">
                            <p>The Review of Abstracts</p>
                        </div>
                    </div>

                    <div className="row date-box">
                        <div className="col">
                            <p>June 30, 2024</p>
                        </div>
                        <div className="col">
                            <p>Submission of Revised Abstracts</p>
                        </div>
                    </div>

                    <div className="row date-box">
                        <div className="col">
                            <p>June 30, 2024</p>
                        </div>
                        <div className="col">
                            <p>Notification of Acceptance of Abstracts</p>
                        </div>
                    </div>

                    <div className="row date-box">
                        <div className="col">
                            <p>June 30, 2024</p>
                        </div>
                        <div className="col">
                            <p>Registration for Abstract Presentation</p>
                        </div>
                    </div>

                    <div className="row date-box">
                        <div className="col">
                            <p>June 30, 2024</p>
                        </div>
                        <div className="col">
                            <p>Conference Dates</p>
                        </div>
                    </div>
                </center>
            </div>

            <div id="ICLVECommittee" className="mt-5 text-center">
                <h1>ICLVE Committee</h1>
            </div>

            <div className="mt-5">
                <img src={abtBtm} className="w-100"/>
            </div>
        </div>
    );
}