import React, { useState, useEffect } from "react";
import { FaComments, FaTimes } from "react-icons/fa"; // Importing icons from react-icons
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
import YouTubeVideo from "./components/YouTubeVideo";
import "./App.css"; // Import your CSS file for styling

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

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

  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };

  return (
    <ThemeProvider>
      <div className={`container ${showContent ? "show" : ""}`}>
        <Header />
        <HeroSection />
        <div className={`content ${showContent ? "show" : ""}`}>
          <section id="aboutMe"><AboutMe /></section>
          <section id="education"><Education /></section>
          <section id="skills"><Skills /></section>
          <section id="youtube-video"><YouTubeVideo /></section>
          <section id="project"><Project /></section>
          <section id="certifications"><Certifications /></section>
          <section id="contact"><Contact /></section>
          <Footer />
        </div>
        {/* <GoToTopButton show={showGoToTop} /> */}
        <div className="chatbot-container">
          <button className="chatbot-toggle-button" onClick={toggleChatbot}>
            {showChatbot ? <FaTimes size={24} /> : <FaComments size={24} />}
          </button>
          {showChatbot && (
            <iframe
              className="chatbot-iframe"
              src="https://mybot.chat/chatbotiframe/9b749aa6-8f77-47ad-b379-05cf443bdcf5?width=450&height=600"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
