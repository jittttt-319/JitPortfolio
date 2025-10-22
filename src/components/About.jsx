import React, { useState, useEffect } from 'react';
import aboutImage from '../assets/IMG_8032.png';

const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentParagraph, setCurrentParagraph] = useState(0);
  
  const paragraphs = [
    "Welcome to my portfolio! I'm a passionate software engineer who loves creating innovative solutions and bringing ideas to life through code.",
    "With a strong foundation in web development, I focus on building user-friendly applications that solve real-world problems. I'm constantly learning and exploring new technologies to stay ahead in this ever-evolving field.",
    "When I'm not coding, you can find me playing badminton or volleyball, staying active and enjoying life to the fullest. I also love capturing moments through filming and listening to a mix of English and Chinese songs that inspire my creative process."
  ];

  useEffect(() => {
    let currentText = '';
    let paragraphIndex = 0;
    let charIndex = 0;

    const typeText = () => {
      if (paragraphIndex < paragraphs.length) {
        if (charIndex < paragraphs[paragraphIndex].length) {
          currentText += paragraphs[paragraphIndex][charIndex];
          setDisplayedText(currentText);
          setCurrentParagraph(paragraphIndex);
          charIndex++;
          setTimeout(typeText, 15); // Typing speed - faster now
        } else {
          currentText += '\n\n'; // Add spacing between paragraphs
          paragraphIndex++;
          charIndex = 0;
          setTimeout(typeText, 300); // Pause between paragraphs - shorter now
        }
      }
    };

    typeText();
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="typing-text">
              {displayedText.split('\n\n').map((para, index) => (
                <span key={index}>
                  {para}
                  {index < displayedText.split('\n\n').length - 1 && <><br /><br /></>}
                </span>
              ))}
              <span className="cursor">|</span>
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Jit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
