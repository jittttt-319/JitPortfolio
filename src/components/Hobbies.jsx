import React, { useState, useEffect } from 'react';
import { FaYoutube } from 'react-icons/fa';
import filming1 from '../assets/filming/DSCF1204.png';
import filming2 from '../assets/filming/DSCF1477.png';
import filming3 from '../assets/filming/DSCF1534.png';
import filming4 from '../assets/filming/DSCF1674.png';
import filming5 from '../assets/filming/DSCF1837.png';
import filming5 from '../assets/filming/DSCF1893.png';
import filming5 from '../assets/filming/DSCF1901.png';
import filming5 from '../assets/filming/DSCF1904.png';
import filming5 from '../assets/filming/DSCF1914.png';

const Hobbies = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [randomFilmingImage, setRandomFilmingImage] = useState('');
  const [fadeImage, setFadeImage] = useState(true);

  const filmingImages = [
    filming1,
    filming2,
    filming3,
    filming4,
    filming5
  ];

  useEffect(() => {
    // Select random filming image on component mount
    const randomIndex = Math.floor(Math.random() * filmingImages.length);
    setRandomFilmingImage(filmingImages[randomIndex]);

    // Change filming image every 15 seconds
    const interval = setInterval(() => {
      setFadeImage(false); // Start fade out
      
      setTimeout(() => {
        const newRandomIndex = Math.floor(Math.random() * filmingImages.length);
        setRandomFilmingImage(filmingImages[newRandomIndex]);
        setFadeImage(true); // Fade in new image
      }, 300); // Wait for fade out to complete
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const hobbies = [
    {
      icon: '🏸',
      title: 'Badminton',
      description: 'Love playing badminton and improving my skills on the court',
      image: null,
      clickable: false
    },
    {
      icon: '🏐',
      title: 'Volleyball',
      description: 'Enjoy the team spirit and competitive nature of volleyball',
      image: null,
      clickable: false
    },
    {
      icon: '🎬',
      title: 'Filming',
      description: 'Passionate about capturing moments and creating visual stories',
      image: randomFilmingImage,
      clickable: true
    },
    {
      icon: <FaYoutube />,
      title: 'Listening to Music',
      description: 'Enjoy listening to English and Chinese songs across various genres',
      image: null,
      clickable: false
    }
  ];

  const handleFilmingClick = () => {
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  return (
    <>
      <section id="hobbies" className="section">
        <div className="container">
          <h2 className="section-title">Hobbies & Interests</h2>
          <div className="hobbies-grid">
            {hobbies.map((hobby, index) => (
              <div 
                key={index} 
                className={`hobby-card glass ${hobby.clickable ? 'clickable' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={hobby.clickable ? handleFilmingClick : undefined}
              >
                {hobby.image ? (
                  <div className="hobby-image">
                    <img 
                      src={hobby.image} 
                      alt={hobby.title}
                      className={fadeImage ? 'fade-in' : 'fade-out'}
                    />
                  </div>
                ) : (
                  <div className="hobby-icon">{hobby.icon}</div>
                )}
                <h3>{hobby.title}</h3>
                <p>{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filming Gallery Modal */}
      {showGallery && (
        <div className="gallery-modal" onClick={closeGallery}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-gallery" onClick={closeGallery}>×</button>
            <h2 className="gallery-title">Filming Gallery</h2>
            <div className="gallery-grid">
              {filmingImages.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Filming ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hobbies;
