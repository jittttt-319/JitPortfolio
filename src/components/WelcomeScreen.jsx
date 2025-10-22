import React, { useState, useEffect } from 'react';
import welcomeImage from '../assets/EAAF293A-696C-4EDF-A591-D739085DBD57-80723-00000DBAA73C3B18.png';

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
    // Start fade out animation after 4.5 seconds
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
    <div className={`welcome-screen ${fadeOut ? 'fade-out' : ''}`} onClick={handleSkip}>
      <div className="welcome-content">
        <div className="welcome-text-container">
          <h1 className="welcome-text">Welcome</h1>
          <h2 className="welcome-name">Jit Xuan</h2>
          <h2 className="welcome-name-chinese">林泽瑄</h2>
        </div>
        <div className="welcome-image">
          <img src={welcomeImage} alt="Jit" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
