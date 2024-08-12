import React from "react";
import careerVideo from "../assets/careerr.mp4";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="relative overflow-hidden font-sans bg-gradient-to-r from-purple-100 to-blue-100 min-h-screen">
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-3xl font-bold tracking-wide">Career Craft</h1>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/feedback"
                className="hover:text-yellow-300 transition-colors duration-300 text-lg"
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-300 transition-colors duration-300 text-lg"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <header className="relative h-[70vh] w-[100vh]   overflow-hidden flex items-center justify-center">
        <video className="w-full h-full object-cover absolute inset-0" autoPlay loop muted>
          <source src={careerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-4xl font-extrabold text-white leading-tight text-center max-w-4xl px-4">
          </h2>
        </div>
      </header>
      <section id="about" className="py-20 px-6 bg-white text-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl mb-6 font-semibold text-blue-600">About Us</h3>
          <p className="text-lg leading-relaxed">
            At Career Craft, we provide comprehensive guidance to help students
            choose the right career paths after 10th and +2. Our expert advice
            and tools are designed to assist you in making informed decisions
            for a successful future.
          </p>
        </div>
      </section>
      <section id="features" className="py-20 px-6 bg-blue-50 text-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl mb-8 font-semibold text-purple-600">Our Features</h3>
          <ul className="text-lg leading-relaxed space-y-4">
            <li>Personalized Career Assessment Tests</li>
            <li>One-on-One Expert Guidance</li>
            <li>Extensive Career Resources</li>
            <li>Workshops and Webinars</li>
            <li>Interactive Learning Tools</li>
          </ul>
          <Link to="/Login">
            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-lg shadow-md hover:from-red-600 hover:to-orange-600 transition-transform transform hover:scale-105 duration-300">
              Explore More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
