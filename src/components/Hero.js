import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const inquireNow = () => {
    window.scrollTo({
      top: 950,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero section" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      {!videoLoaded && (
        <img
          src="./media/01.jpg" // Replace with the path to your loading image
          alt="Loading"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoad}
        style={{
          display: videoLoaded ? 'block' : 'none',
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="./media/drone.mp4" type="video/mp4" />
        {/* You can add additional source elements for different video formats (e.g., webm, ogg) */}
        Your browser does not support the video tag.
      </video>
      <div className="hero__content" style={{ zIndex: 1, color: '#fff', textAlign: 'center', position: 'relative' }}>
        <h1 className="hero__title animated-text">
          Elevate Your Projects <br />
          With Quality Steel <br />
          And Dependable Solutions.
        </h1>
        <button className="hero__button animated-button on" onClick={inquireNow}>
          Start Your Inquiry Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
