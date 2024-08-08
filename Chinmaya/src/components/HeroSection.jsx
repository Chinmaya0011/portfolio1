import React, { useState, useEffect } from 'react';
import photo from '../../public/mydp.png';
import { FaGithub, FaLinkedin, FaTwitter, FaHackerrank } from 'react-icons/fa';
import resume from '../../public/resume.pdf';
import { useTheme } from './Theme.jsx';
import "../style/herosection.css"
const HeroSection = () => {
  const [profession, setProfession] = useState('Web Developer');
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setProfession((prevProfession) => 
        prevProfession === ' Developer' ? ' Designer' : ' Developer'
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`component hero-section min-h-screen flex flex-col justify-center items-center px-2 ${isDarkMode ? 'dark' : ''}`}>
    
      <div className="flex flex-col md:flex-row md:space-x-12 items-center gap-8 relative z-10">
        <div className="photo-container relative overflow-hidden rounded-full shadow-2xl transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
          <img
            src={photo}
            alt="Your Name - Web Developer"
            width={300}
            height={300}
            className="photo-image object-cover"
          />
        </div>

        <div className={`text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <h1 className="heading dark:heading-dark">
  I&apos;m a Web 
  <p className='profession dark:profession-dark'>{profession}</p>
</h1>
<p className="subheading dark:subheading-dark">
  Building beautiful and functional web experiences.
</p>


          <div className="flex justify-center mt-8">
            <a
              href={resume} // Use the correct path to your PDF file
              download="resume.pdf"
              className={`px-6 py-3 rounded-md ${isDarkMode ? 'bg-gray-700 hover:bg-gray-500' : 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-blue-500 hover:to-purple-700'} text-white shadow-lg hover:shadow-xl transform transition-transform duration-300`}
              style={{ textDecoration: 'none', transition: 'all 0.3s ease' }}
            >
              My Resume
            </a>
          </div>
          <div className="flex mt-4 space-x-4 justify-center text-center">
            <a href="https://github.com/Chinmaya0011" target="_blank" rel="noopener noreferrer" style={{ color: isDarkMode ? 'white' : 'black' }} className="social-icon hover:scale-110 transform transition-transform duration-300">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/finasor/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077B5' }} className="social-icon hover:scale-110 transform transition-transform duration-300">
              <FaLinkedin size={32} />
            </a>
            <a href="https://www.hackerrank.com/profile/imchinu17" target="_blank" rel="noopener noreferrer" style={{ color: '#2EC866' }} className="social-icon hover:scale-110 transform transition-transform duration-300">
              <FaHackerrank size={32} />
            </a>
            <a href="https://twitter.com/Chinmay67358261" target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2' }} className="social-icon hover:scale-110 transform transition-transform duration-300">
              <FaTwitter size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
