import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/Home/HomePage";
import About from "./components/About/About";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
