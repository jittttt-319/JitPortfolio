import React, { useState, useEffect } from 'react';
import welcomeImage from '../assets/welcome.png';

const WelcomeScreen = () => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  useEffect(() => {
    // Start fade out animation after 5 seconds - 500ms
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4500);

    // Hide welcome screen after 5 seconds
    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`welcome-screen ${fadeOut ? 'fade-out' : ''}`}
      onClick={handleSkip}
      role="presentation"
    >
      <div className="welcome-content glass">
        <div className="welcome-text-container">
          <p className="welcome-intro">
            Portfolio loading<span className="loading-dots"></span>
          </p>
          <h1 className="welcome-text">Welcome</h1>
          <h2 className="welcome-name">Jit Xuan</h2>
          <h2 className="welcome-name-chinese">林泽瑄</h2>
          <p className="welcome-hint">Tap anywhere to enter</p>
        </div>

        <div className="welcome-image">
          <img
            src={welcomeImage}
            alt="Jit capturing a cinematic shot"
            loading="eager"
          />
          <span className="welcome-image-glow" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
