import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/Home/HomePage";
import About from "./components/About/About";
import CallForExtendedAbstracts from "./components/CallForExtendedAbstracts/CallForExtendedAbstracts";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Footer from "./components/Footer/Footer";
import Registration from "./components/Registration/Registration";
import History from "./components/History/History";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/call-for-extended-abstracts" element={<CallForExtendedAbstracts />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </Router>
    );
}

export default App;
