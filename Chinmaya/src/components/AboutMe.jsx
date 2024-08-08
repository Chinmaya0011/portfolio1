import '../style/About.css'; // Make sure to create this CSS file
import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';

const AboutMe = () => {
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id='aboutMe' className="about-section">
      <div
        ref={containerRef}
        className="about-container"
        style={{ width: containerWidth ? (containerWidth >= 568 ? '60%' : '90%') : 'auto' }}
      >
        <h1 className="about-heading">
          <FaLaptopCode className="icon" /> 
          CHINMAYA KUMAR MISHRA
        </h1>
        <p className="about-subheading">
          <FaProjectDiagram className="icon" /> 
          Full-Stack Web Developer
        </p>
        <div className="contact-info">
          <p className="contact-item">
            <FaEnvelope className="icon" /> 
            imchinu17@gmail.com
          </p>
          <p className="contact-item">
            <FaPhone className="icon" /> 
            7077835119
          </p>
          <p className="contact-item">
            <FaMapMarkerAlt className="icon" /> 
            Bhubaneswar, Odisha
          </p>
        </div>
        <hr className="separator" />
        <p className="about-text">
          Passionate Full-Stack Web Developer based in Bhubaneswar, Odisha. Experienced in building innovative web solutions using React.js, Next.js, Node.js, and MongoDB. Skilled in developing user-friendly applications that meet the needs of clients and users alike.
        </p>
        <p className="about-text">
          In my journey as a developer, I&apos;ve had the opportunity to work on various projects ranging from e-commerce platforms to hospital management systems. I thrive in collaborative environments and enjoy bringing creative ideas to life through code.
        </p>
        <p className="about-text">
          I am deeply committed to continuous learning and staying up-to-date with the latest technologies and industry trends. I believe in the power of technology to drive positive change and am passionate about leveraging my skills to create meaningful solutions.
        </p>
        <p className="about-text">
          Outside of coding, I enjoy exploring new technologies, reading tech blogs, and participating in hackathons. I also love to travel, discover new cuisines, and spend time with family and friends.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
