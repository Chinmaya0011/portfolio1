import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skill";
import Project from "./components/Project";
import Certifications from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/Theme";
import GoToTopButton from "./components/GoToTopButton"; // Import GoToTopButton
import "./App.css"; // Import your CSS file for styling

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.8;

      if (scrollTop > scrollThreshold) {
        setShowContent(true);
        setShowGoToTop(true);
      } else {
        setShowContent(false);
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="container">
        <Header />
        <HeroSection />
        <div className={`content ${showContent ? "show" : ""}`}>
          <AboutMe />
          <Education />
          <Skills />
          <Project />
          <Certifications />
          <Contact />
          <Footer />
        </div>
        <GoToTopButton show={showGoToTop} />
      </div>
    </ThemeProvider>
  );
}
