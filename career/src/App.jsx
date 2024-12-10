import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Landingpage from './Components/Landingpage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact';

// Categories
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
import Electrician from './Components/Electrician';
import Plumber from './Components/Plumber';
import Carpenter from './Components/Carpenter';

// Specializations
import Soft from './Components/Soft';
import Data from './Components/Data';
import Cyber from './Components/Cyber';
import Electrical from './Components/Electrical';
import Mech from './Components/Mech';
import Civil from './Components/Civil';
import Robo from './Components/Robo';
import Network from './Components/Network';
import Cloud from './Components/Cloud';
import Bio from './Components/Bio';
import Tele from './Components/Tele';
import Environ from './Components/Environ';



// Professions
import Physician from './Components/Physician';
import Nurse from './Components/Nurse';
import Pharmacist from './Components/Pharmacist';
import Therapist from './Components/Therapist';
import Admin from './Components/Admin';
import Biologist from './Components/Biologist';
import Lawyer from './Components/Lawyer';
import Policyanalyst from './Components/Policyanalyst';
import Judge from './Components/Judge';

// Business and Management
import BusinessAnalyst from './Components/BusinessAnalyst';
import ProductManager from './Components/ProductManager';
import FinancialAnalyst from './Components/FinancialAnalyst';
import ManagementConsultant from './Components/ManagementConsultant';
import Accountant from './Components/Accountant';

// Creative Roles
import Graphicdesigner from './Components/Graphicdesigner';
import Videoproducer from './Components/Videoproducer';
import Socialmediamanager from './Components/Socialmediamanager';
import Contentcreator from './Components/Contentcreator';
import Artdirector from './Components/Artdirector';
import HVACTechnician from './Components/HVACTechnician';

// Educational Roles
import Teacher from './Components/Teacher';
import Consultant from './Components/Consultant';
import Designer from './Components/Designer';
import Professor from './Components/Professor';
import ResearchScientist from './Components/ResearchScientist';
import EnvironmentalScientist from './Components/EnvironmentalScientist';
import Chemist from './Components/Chemist';
import Complianceofficer from './Components/Complianceofficer';
import Epidemiologist from './Components/Epidemiologist';
import Prespecialist from './Components/Prespecialist';

// Feedback and iscellaneous
import Feedback from './Components/Feedback';
import Ass1 from './Components/Ass1';
import Counselors from './Components/Counselors';


// 404 Component
const NotFound = () => <h1>Page Not Found</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Basic Routes */}
        <Route path="/" element={<Landingpage />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Navbar" element={<Navbar />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Contact" element={<Contact />} />

        {/* Categories */}
        <Route path="Tech" element={<Tech />} />
        <Route path="Software" element={<Software />} />
        <Route path="Health" element={<Health />} />
        <Route path="Business" element={<Business />} />
        <Route path="Arts" element={<Arts />} />
        <Route path="Education" element={<Education />} />
        <Route path="Science" element={<Science />} />
        <Route path="Law" element={<Law />} />
        <Route path="Skill" element={<Skill />} />
        <Route path="Parent" element={<Parent />} />
        <Route path="Electrician" element={<Electrician/>} />
        <Route path="Plumber" element={<Plumber/>} />
        <Route path="Carpenter" element={<Carpenter/>} />

        


        


        {/* Specializations */}
        <Route path="Soft" element={<Soft />} />
        <Route path="Data" element={<Data />} />
        <Route path="Cyber" element={<Cyber />} />
        <Route path="Electrical" element={<Electrical />} />
        <Route path="Mech" element={<Mech />} />
        <Route path="Civil" element={<Civil />} />
        <Route path="Robo" element={<Robo />} />
        <Route path="Network" element={<Network />} />
        <Route path="Cloud" element={<Cloud />} />
        <Route path="Bio" element={<Bio />} />
        <Route path="Tele" element={<Tele />} />
        <Route path="Environ" element={<Environ />} />


        {/* Professions */}
        <Route path="Physician" element={<Physician />} />
        <Route path="Nurse" element={<Nurse />} />
        <Route path="Pharmacist" element={<Pharmacist />} />
        <Route path="Therapist" element={<Therapist />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Lawyer" element={<Lawyer />} />
        <Route path="Policyanalyst" element={<Policyanalyst />} />
        <Route path="Complianceofficer" element={<Complianceofficer/>} />
        <Route path="Judge" element={<Judge/>} />
        <Route path="Prespecialist" element={<Prespecialist/>} />




        {/* Business and Management */}
        <Route path="BusinessAnalyst" element={<BusinessAnalyst />} />
        <Route path="ProductManager" element={<ProductManager />} />
        <Route path="FinancialAnalyst" element={<FinancialAnalyst />} />
        <Route path="ManagementConsultant" element={<ManagementConsultant />} />
        <Route path="Accountant" element={<Accountant />} />

        {/* Creative Roles */}
        <Route path="Graphicdesigner" element={<Graphicdesigner />} />
        <Route path="Videoproducer" element={<Videoproducer />} />
        <Route path="Socialmediamanager" element={<Socialmediamanager />} />
        <Route path="Biologist" element={<Biologist />} />
        <Route path="Contentcreator" element={<Contentcreator />} />
        <Route path="Artdirector" element={<Artdirector />} />
        <Route path="HVACTechnician" element={<HVACTechnician/>} />


        {/* Educational Roles */}
        <Route path="Teacher" element={<Teacher />} />
        <Route path="Consultant" element={<Consultant />} />
        <Route path="Designer" element={<Designer />} />
        <Route path="Professor" element={<Professor />} />
        <Route path="ResearchScientist" element={<ResearchScientist/>} />
        <Route path="EnvironmentalScientist" element={<EnvironmentalScientist />} />
        <Route path="Chemist" element={<Chemist />} />
        <Route path="Epidemiologist" element={<Epidemiologist />} />



        

        {/* Feedback and Miscellaneous */}
        <Route path="Feedback" element={<Feedback />} />
        <Route path="Ass1" element={<Ass1 />} />
        <Route path="Counselors" element={<Counselors />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
