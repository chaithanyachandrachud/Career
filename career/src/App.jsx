import React, {useState} from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landingpage from './Components/Landingpage';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import Tech from './Components/Tech';
import Software from './Components/Software';
import Health from './Components/Health';
import Business from './Components/Business';




const App=()=>{
  return(
    <Router>
      <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Navbar" element={<Navbar />} />
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Tech" element={<Tech />} />
      <Route path="Software" element={<Software/>} />
      <Route path="Health" element={<Health/>} />
      <Route path="Business" element={<Business/>} />

      <Route path="/" element={<Landingpage />} />



      </Routes>
    </Router>
  )
}

export default App
