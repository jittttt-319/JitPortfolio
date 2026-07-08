import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import translations from '../translations';
import filming1 from '../assets/filming/DSCF1893.png';
import filming2 from '../assets/filming/DSCF1901.png';
import filming3 from '../assets/filming/DSCF1904.png';
import filming4 from '../assets/filming/DSCF1914.png';
import filming5 from '../assets/filming/DSCF1553.png';
import filming6 from '../assets/filming/DSCF1690.png';
import filming7 from '../assets/filming/DSCF1837.png';
import filming8 from '../assets/filming/DSCF2369.png';
import filming9 from '../assets/filming/DSCF2371.png';

const Hobbies = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [randomFilmingImage, setRandomFilmingImage] = useState('');
  const [fadeImage, setFadeImage] = useState(true);
  const { lang } = useLang();
  const t = translations[lang].hobbies;

  const filmingImages = [
    filming1,
    filming2,
    filming3,
    filming4,
    filming5,
    filming6,
    filming7,
    filming8,
    filming9
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

  const hobbyIcons = ['🏸', '🏐', '🎬', <FaYoutube />];
  const hobbyClickable = [false, false, true, true];
  const hobbyLinks = [null, null, null, 'https://www.youtube.com'];
  const hobbyImages = [null, null, randomFilmingImage, null];

  const hobbies = t.items.map((item, i) => ({
    ...item,
    icon: hobbyIcons[i],
    image: hobbyImages[i],
    clickable: hobbyClickable[i],
    link: hobbyLinks[i],
  }));

  const handleFilmingClick = () => {
    setShowGallery(true);
  };

  const handleHobbyClick = (hobby) => {
    if (hobby.link) {
      window.open(hobby.link, '_blank', 'noopener,noreferrer');
    } else if (hobby.clickable) {
      handleFilmingClick();
    }
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  return (
    <>
      <motion.section
        id="hobbies"
        className="container"
        style={{ marginTop: '2rem' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title"><span style={{ color: '#9467FB', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>06.</span> {t.sectionTitle}</h2>
        <div className="hobbies-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className={`hobby-card glass-panel hover-float ${hobby.clickable ? 'clickable' : ''}`}
              style={{
                cursor: hobby.clickable ? 'pointer' : 'default',
                textAlign: 'center',
              }}
              onClick={hobby.clickable ? () => handleHobbyClick(hobby) : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {hobby.image ? (
                <div className="hobby-image" style={{ marginBottom: '1rem', height: '150px', overflow: 'hidden', borderRadius: '8px', border: '1px solid rgba(148, 103, 251, 0.2)' }}>
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className={fadeImage ? 'fade-in' : 'fade-out'}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ) : (
                <div className="hobby-icon" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#9467FB' }}>{hobby.icon}</div>
              )}
              <h3 style={{ color: '#ccd6f6', marginBottom: '0.5rem' }}>{hobby.title}</h3>
              <p style={{ color: '#8892b0' }}>{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Filming Gallery Modal */}
      {showGallery && (
        <div className="gallery-modal" onClick={closeGallery} style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(10, 25, 47, 0.95)', zIndex: 2000,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div className="gallery-content glass-panel" onClick={(e) => e.stopPropagation()} style={{
            maxWidth: '1200px',
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '40px',
            position: 'relative',
            borderRadius: '16px',
            background: 'rgba(10, 25, 47, 0.9)',
            border: '1px solid rgba(148, 103, 251, 0.2)',
            boxShadow: '0 20px 80px rgba(0, 0, 0, 0.6)'
          }}>
            <button className="close-gallery" onClick={closeGallery} style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(148, 103, 251, 0.1)',
              border: '1px solid rgba(148, 103, 251, 0.3)',
              color: '#9467FB',
              fontSize: '1.5rem',
              cursor: 'pointer',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
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
