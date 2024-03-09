import ProfShiranthaHeenkenda from "../../assets/images/Committee/Prof Shirantha Heenkenda.svg";
import ProfSudathManjulaAmarasena from "../../assets/images/Committee/ProfSudathManjulaAmarasena.svg";
import ProfCharmalieNahallage from "../../assets/images/Committee/ProfCharmalieNahallage.svg";
// import DrRohanaUlluwishewa from "../assets/images/Committee/DrRohanaUlluwishewa.svg";
// import ProfPrasadSethunga from "../assets/images/Committee/ProfPrasadSethunga.svg";
import ProfSunethraThennkoon from "../../assets/images/Committee/ProfSunethraThennkoon.svg";
import MrsHMSNiroshani from "../../assets/images/Committee/MrsHMSNiroshani.svg";
import MrTThirumayuran from "../../assets/images/Committee/MrTThirumayuran.svg";
import chandima from "../../assets/images/Committee/Chandima.svg";

export default function Committee() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="mt-5 text-center">
                <h1>ICLVE Committee</h1>
            </div>

            <div className="mt-5 text-center">
                <h3>Conference Advisors</h3>
            </div>

            <div className="row mt-5 shadow rounded-5 w-50 p-4">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <img src={ProfSudathManjulaAmarasena} className="w-50 rounded-5"/>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h5>Prof. Sudath Manjula Amarasena</h5>
                    <p>Director, Career Guidance Unit</p>
                    <p>(0)777216953</p>
                    <p>sudath@sjp.ac.lk</p>
                </div>
            </div>

            <div className="row mt-5 shadow rounded-5 w-50 p-4">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <img src={ProfShiranthaHeenkenda} className="w-50 rounded-5" alt="Prof. Shirantha Heenkenda"/>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h5>Prof. Shirantha Heenkenda</h5>
                    <p>Dean, Faculty of Humanistic and Social Sciences</p>
                    <p>0777125101</p>
                    <div>deanfhss@sjp.ac.lk</div>
                </div>
            </div>

            <div className="row mt-5 shadow rounded-5 w-50 p-4">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <img src={ProfCharmalieNahallage} className="w-50 rounded-5"/>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h5>Prof. Charmalie Nahallage</h5>
                    <p>Member, International Center for Multidisciplinary Studies</p>
                    <p>0718071404</p>
                    <p>chamalie@sjp.ac.lk</p>
                </div>
            </div>

            <div className="row mt-5 shadow rounded-5 w-50 p-4">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    {/*<img src={DrRohanaUlluwishewa} className="w-50 rounded-5"/>*/}
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h5>Dr. Rohana Ulluwishewa</h5>
                    <p>Independent Researcher and Writer , New Zealand</p>
                </div>
            </div>

            <div className="row mt-5 shadow rounded-5 w-50 p-4">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    {/*<img src={ProfPrasadSethunga} className="w-50 rounded-5"/>*/}
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h5>Prof. Prasad Sethunga </h5>
                    <p>Directoanthar General , National Institute of Education</p>
                </div>
            </div>

            <div className="mt-5 text-center">
                <h3>Conference Chair</h3>
            </div>

            <div className="row mt-5 shadow rounded-5 w-50 p-4">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <img src={ProfSunethraThennkoon} className="w-50 rounded-5"/>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h5>Prof. Sunethra Thennkoon</h5>
                    <p>Director, International Center for Multidisciplinary Studies, USJ.</p>
                    <p>0707016295</p>
                    <p>sunethrapk@sjp.ac.lk</p>
                </div>
            </div>

            <div className="mt-5 text-center">
                <h3>Conference Secretaries</h3>
            </div>

            <div className="row mt-5 shadow rounded-5 w-50 p-4">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <img src={MrsHMSNiroshani} className="w-50 rounded-5"/>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h5>Mrs. H.M.S. Niroshani</h5>
                    <p>Career Guidance Unit, University of Sri Jayewardenepura</p>
                </div>
            </div>

            <div className="row mt-5 shadow rounded-5 w-50 p-4">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <img src={MrTThirumayuran} className="w-50 rounded-5"/>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h5>Mr. T.Thirumayuran</h5>
                    <p>Director, Association of Living Values Education International </p>
                </div>
            </div>

            <div className="container mt-5 text-center">
                <h3 className="mb-5">Student Organizing Committee</h3>

                <h5 className="text-decoration-underline mb-4 mt-4">Advisors</h5>
                <div className="row justify-content-center">
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                </div>

                <h5 className="text-decoration-underline mb-4 mt-4">Project Chairperson</h5>
                <div className="row justify-content-center">
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                </div>

                <h5 className="text-decoration-underline mb-4 mt-4">Co-Chairpersons</h5>
                <div className="row justify-content-center">
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                </div>

                <h5 className="text-decoration-underline mb-4 mt-4">Marketing Crew</h5>
                <div className="row justify-content-around">
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                </div>

                <h5 className="text-decoration-underline mb-4 mt-4">Human Resource Crew</h5>
                <div className="row justify-content-center">
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                </div>

                <h5 className="text-decoration-underline mb-4 mt-4">Finance Crew</h5>
                <div className="row justify-content-center">
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                </div>

                <h5 className="text-decoration-underline mb-4 mt-4">Event Operation Crew</h5>
                <div className="row justify-content-center">
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 m-3 shadow rounded-5 d-flex flex-column align-items-center text-center">
                        <img src={chandima} className="w-100 rounded-5 my-3" alt="Chandima"/>
                        <h5>Mr. Chandima Ruwanthilaka</h5>
                        <p>Faculty of Applied Sciences</p>
                    </div>
                </div>

            </div>
        </div>
    );
}