import React, {useState} from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landingpage from './Components/Landingpage';

const App=()=>{
  return(
    <Router>
      <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Navbar" element={<Navbar />} />
      <Route path="/" element={<Landingpage />} />



      </Routes>
    </Router>
  )
}

export default App
