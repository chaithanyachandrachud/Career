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
import Soft from './Components/Soft';
import Data from './Components/Data';
import Cyber from "./Components/Cyber";
import Electrical from './Components/Electrical';
import Mech from './Components/Mech';
import Civil from './Components/Civil';
import Robo from "./Components/Robo";
import Network from './Components/Network';
import Cloud from './Components/Cloud';
import Bio from './Components/Bio';
import Tele from './Components/Tele';
import Environ from './Components/Environ';
import Physician from './Components/Physician';
import Nurse from './Components/Nurse';
import Feedback from './Components/Feedback';
import Ass1 from './Components/Ass1';



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
      <Route path="Soft" element={<Soft/>} />
      <Route path="Data" element={<Data/>} />
      <Route path="Cyber" element={<Cyber/>} />
      <Route path="Electrical" element={<Electrical/>} />
      <Route path="Mech" element={<Mech/>} />
      <Route path='Civil' element={<Civil/>} />
      <Route path='Robo' element={<Robo/>} />
      <Route path='Network' element={<Network/>} />
      <Route path='Cloud' element={<Cloud/>} />
      <Route path='Bio' element={<Bio/>} />
      <Route path='Tele' element={<Bio/>} />
      <Route path='Environ' element={<Environ/>} />
      <Route path='Physician' element={<Physician/>} />
      <Route path='Nurse' element={<Nurse/>} />
      <Route path='Feedback' element={<Feedback/>} />
      <Route path='Ass1' element={<Ass1/>} />




    </Routes>
    </Router>
  )
}

export default App