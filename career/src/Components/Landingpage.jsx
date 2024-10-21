import React from "react";
import careerVideo from "../assets/careerr.mp4";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      className="relative overflow-hidden font-sans"
      style={{
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full z-10"
        style={{
          background: "linear-gradient(to right, #007AFF, #5851DB)",
          color: "white",
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          className="container mx-auto flex justify-between items-center p-4"
          style={{ padding: "1rem" }}
        >
          <h1
            className="text-3xl font-bold"
            style={{
              fontSize: "2rem",
              letterSpacing: "3px",
               color: "black",
              transition: "transform 0.3s",
            }}
          >
            Career Craft
          </h1>
          <ul className="flex space-x-8" style={{ display: "flex", gap: "2rem" }}>
            <li>
              <Link
                to="/feedback"
                style={{
                  color: "black",
                  fontSize: "1.2rem",
                  transition: "color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#FFD7")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                   color: "black",
                  transition: "color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative flex items-center justify-center"
        style={{
          height: "80vh",
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <video
          className="object-cover"
          style={{
            width: "80%",
            height: "100%",
            objectFit: "cover",
          }}
          autoPlay
          loop
          muted
        >
          <source src={careerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            
          }}
        >
          <h2
            className="text-5xl font-extrabold"
            style={{
              color: "white",
              fontSize: "3.5rem",
              zIndex: "10",
              animation: "fadeIn 1.5s ease-in-out",
              letterSpacing: "2px",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
            }}
          >
          </h2>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6"
        style={{
          padding: "5rem 0",
          textAlign: "center",
        }}
      >
        <div className="container mx-auto">
          <h3
            className="text-4xl mb-6 font-semibold"
            style={{
              fontSize: "2.8rem",
              color: "#3B82F6",
              display: "inline-block",
              position: "relative",
              paddingBottom: "0.8rem",
              borderBottom: "4px solid #007AFF",
            }}
          >
            About Us
          </h3>
          <p
            className="text-lg"
            style={{
              fontSize: "1.2rem",
              color: "#555",
              maxWidth: "750px",
              margin: "2rem auto",
              lineHeight: "1.7",
              transform: "translateY(20px)",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "translateY(0)")}
            onMouseLeave={(e) => (e.target.style.transform = "translateY(20px)")}
          >
            At Career Craft, we provide comprehensive guidance to help students
            choose the right career paths after +2. Our expert advice and tools
            are designed to assist you in making informed decisions for a
            successful future.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-6"
        style={{
          backgroundColor: "#f3e5f5",
          padding: "5rem 0",
          textAlign: "center",
        }}
      >
        <div className="container mx-auto">
          <h3
            className="text-4xl mb-8 font-semibold"
            style={{
              fontSize: "2.5rem",
              color: "#A855F7",
              marginBottom: "1.5rem",
            }}
          >
            Our Features
          </h3>
          <ul
            className="text-lg"
            style={{
              fontSize: "1.2rem",
              color: "#333",
              listStyle: "none",
              padding: "0",
              lineHeight: "1.8",
            }}
          >
            {[
              "Personalized Career Assessment Tests",
              "One-on-One Expert Guidance",
              "Extensive Career Resources",
              "Workshops and Webinars",
              "Interactive Learning Tools",
            ].map((feature, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "1.5rem",
                  paddingLeft: "2rem",
                  position: "relative",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "1rem",
                    height: "1rem",
                    borderRadius: "50%",
                    backgroundColor: "#3B82F6",
                    display: "inline-block",
                    marginRight: "1rem",
                  }}
                ></span>
                {feature}
              </li>
            ))}
          </ul>
          <Link to="/Login">
            <button
              className="mt-8"
              style={{
                padding: "0.8rem 2rem",
                height: "100px",
                width:"200px",
                background: "linear-gradient(to right, #36D1DC, #5B86E5)",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                boxShadow: "0px 8px 20px rgba(54, 209, 220, 0.4)",
                cursor: "pointer",
                fontSize: "1.2rem",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}c 
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow =
                  "0px 12px 25px rgba(54, 209, 220, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow =
                  "0px 8px 20px rgba(54, 209, 220, 0.4)";
              }}
            >
              Explore More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;