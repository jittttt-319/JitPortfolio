import React, { useState, useEffect } from 'react';
import { FaYoutube } from 'react-icons/fa';
import filming1 from '../assets/filming/DSCF1893.png';
import filming2 from '../assets/filming/DSCF1901.png';
import filming3 from '../assets/filming/DSCF1904.png';
import filming4 from '../assets/filming/DSCF1914.png';
import filming5 from '../assets/filming/DSCF1553.png';
import filming6 from '../assets/filming/DSCF1690.png';
import filming7 from '../assets/filming/DSCF1837.png';

const Hobbies = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [randomFilmingImage, setRandomFilmingImage] = useState('');
  const [fadeImage, setFadeImage] = useState(true);

  const filmingImages = [
    filming1,
    filming2,
    filming3,
    filming4,
    filming5,
    filming6,
    filming7
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
      <section id="hobbies" className="container">
        <h2 className="section-title"><span style={{ color: '#64ffda', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>07.</span> Hobbies & Interests</h2>
        <div className="hobbies-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`hobby-card ${hobby.clickable ? 'clickable' : ''}`}
              style={{
                backgroundColor: '#112240',
                padding: '2rem',
                borderRadius: '4px',
                cursor: hobby.clickable ? 'pointer' : 'default',
                textAlign: 'center'
              }}
              onClick={hobby.clickable ? handleFilmingClick : undefined}
            >
              {hobby.image ? (
                <div className="hobby-image" style={{ marginBottom: '1rem', height: '150px', overflow: 'hidden', borderRadius: '4px' }}>
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className={fadeImage ? 'fade-in' : 'fade-out'}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ) : (
                <div className="hobby-icon" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#64ffda' }}>{hobby.icon}</div>
              )}
              <h3 style={{ color: '#ccd6f6', marginBottom: '0.5rem' }}>{hobby.title}</h3>
              <p style={{ color: '#8892b0' }}>{hobby.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filming Gallery Modal */}
      {showGallery && (
        <div className="gallery-modal" onClick={closeGallery} style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(10, 25, 47, 0.95)', zIndex: 2000,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()} style={{
            maxWidth: '1200px',
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '40px',
            position: 'relative'
          }}>
            <button className="close-gallery" onClick={closeGallery} style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'rgba(100, 255, 218, 0.1)',
              border: '1px solid #64ffda',
              color: '#64ffda',
              fontSize: '2rem',
              cursor: 'pointer',
              width: '50px',
              height: '50px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}>×</button>
            <h2 className="gallery-title" style={{
              color: '#ccd6f6',
              marginBottom: '30px',
              textAlign: 'center',
              fontSize: '1.5rem',
              fontFamily: "'Fira Code', monospace"
            }}>
              Filming Gallery
            </h2>
            <div className="gallery-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
              padding: '10px'
            }}>
              {filmingImages.map((image, index) => (
                <div key={index} className="gallery-item" style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  backgroundColor: '#112240',
                  aspectRatio: '1',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <img
                    src={image}
                    alt={`Filming ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
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
