import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
import { Container } from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
    const [showFirstHeading, setShowFirstHeading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstHeading(prevState => !prevState);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Container fluid className="p-0">
                <div className="absolute overflow-hidden">
                    <div className="absolute inset-0 justify-center mt-5">
                        <div className="bg-shape1 bg-teal opacity-50 bg-blur mx-3 mt-5"></div>
                        <div className="bg-shape2 bg-primary opacity-50 bg-blur mt-5"></div>
                        <div className="bg-shape1 bg-purple opacity-50 bg-blur mt-5"></div>
                    </div>
                </div>
            </Container>
            <NavBar/>
            <div className="text-center py-5 animation-container">
                {showFirstHeading ? (
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={2000} isVisible={true}>
                        <h1 className=" misty-text ">2ND INTERNATIONAL CONFERENCE ON LIVING VALUES EDUCATION</h1>
                    </Animated>
                ) : (
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={2000} isVisible={true}>
                        <h1 className="misty-text" style={{fontSize:100}}>ICLVE 2024</h1>
                    </Animated>
                )}
            </div>
            <About/>
            <Footer/>
        </>
    );
}
