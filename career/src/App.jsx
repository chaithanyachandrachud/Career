import React, {useState} from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Arts from './Components/Arts';
import Education from './Components/Education';
import Science from './Components/Science';
import Law from './Components/Law';
import Skill from './Components/Skill';
import Parent from './Components/Parent';


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
      <Route path="Arts" element={<Arts/>} />
      <Route path="Education" element={<Education/>} />
      <Route path="Science" element={<Science/>} />
      <Route path="Law" element={<Law/>} />
      <Route path="Skill" element={<Skill/>} />
      <Route path="Parent" element={<Parent/>} />
      <Route path="/" element={<Landingpage />} />



      </Routes>
    </Router>
  )
}

export default App
