// src/components/YouTubeVideo.js
import React from 'react';
import '../style/YouTubeVideo.css'; // Custom CSS for styling the video component

const YouTubeVideo = () => {
  return (
    <div className="youtube-wrapper">
      <h1>Employee CMS</h1>
    
      <div className="youtube-container">
        <iframe
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/o6HrRdRzeIA`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Employee CMS Video"
        ></iframe>
      </div>
        <p className="description">
        Welcome to the Employee CMS video tutorial. This video provides an overview of how to manage employee data efficiently using our system.
      </p>
    </div>
  );
};

export default YouTubeVideo;
