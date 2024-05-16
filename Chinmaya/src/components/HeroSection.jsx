
import React, { useState, useEffect } from 'react';
import photo from '../../public/mydp.png'
import { FaGithub, FaLinkedin, FaTwitter, FaHackerrank } from 'react-icons/fa';
import resume from '../../public/resume.pdf'
import {useTheme} from './Theme.jsx'

const HeroSection = () => {
  const [profession, setProfession] = useState('Web Developer');
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setProfession((prevProfession) => 
        prevProfession === ' Developer' ? ' Designer' : ' Developer'
      );
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`component hero-section section1 hero min-h-screen flex flex-col justify-center items-center px-4 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex flex-col md:flex-row md:space-x-12 items-center gap-8">
        <img
          src={photo}
          alt="Your Name - Web Developer"
          width={300}
          height={300}
          className="rounded-full shadow-md"
          style={{ maxWidth: '100%', height: 'auto' }} // Resize the image
        />

        <div className={`text-center ${isDarkMode ? 'text-white' : ''}`}>
          <h1 className="justify-center flex text-4xl font-bold">
            I&apos;m a Web <p className='ml-4'> {profession}</p>
          </h1>
          <p className="text-xl mt-4">
            Building beautiful and functional web experiences.
          </p>
          <div className="flex justify-center mt-8">
          <a
  href="../../public/resume.pdf" // Replace this with the path to your PDF file
  download="resume.pdf" // Set the filename for the downloaded file
  className={`px-4 py-2 rounded-md ${isDarkMode ? 'bg-gray-600 hover:bg-blue-700' : 'bg-green-400 hover:bg-blue-600'} text-white shadow-md hover:shadow-lg`}
  style={{ textDecoration: 'none', transition: 'all 0.3s ease' }}
>
  My Resume
</a>


          </div>
          <div className="flex mt-4 space-x-4 justify-center text-center">
            <a href="https://github.com/Chinmaya0011" target="_blank" rel="noopener noreferrer" style={{ color: isDarkMode ? 'white' : 'black' }} className="social-icon"><FaGithub size={32} /></a>
            <a href="https://www.linkedin.com/in/finasor/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077B5' }} className="social-icon"><FaLinkedin size={32} /></a>
            <a href="https://www.hackerrank.com/profile/imchinu17" target="_blank" rel="noopener noreferrer" style={{ color: '#2EC866' }} className="social-icon"><FaHackerrank size={32} /></a>
            <a href="https://twitter.com/Chinmay67358261" target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2' }} className="social-icon"><FaTwitter size={32} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;