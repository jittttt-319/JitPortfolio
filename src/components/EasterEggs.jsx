import React, { useState, useEffect } from 'react';

const EasterEggs = () => {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [showAchievement, setShowAchievement] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState(null);

  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  const achievementsList = {
    konami: { title: '🎮 Secret Code Master', desc: 'You found the Konami Code!' },
    explorer: { title: '🔍 Explorer', desc: 'Visited all sections!' },
    speedster: { title: '⚡ Speed Reader', desc: 'Scrolled through everything in under 10s!' },
    clicker: { title: '🖱️ Click Master', desc: 'Clicked 100 times!' },
  };

  // Unlock achievement
  const unlockAchievement = (achievementKey) => {
    if (!achievements.includes(achievementKey)) {
      setAchievements([...achievements, achievementKey]);
      setCurrentAchievement(achievementsList[achievementKey]);
      setShowAchievement(true);
      setTimeout(() => setShowAchievement(false), 4000);
    }
  };

  // Konami Code Handler + Easy Shortcut
  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toLowerCase();
      
      // Easy Way: Ctrl + K to trigger immediately!
      if (e.ctrlKey && key === 'k') {
        e.preventDefault();
        console.log('🎉 SHORTCUT ACTIVATED! (Ctrl + K)');
        triggerKonamiEffect();
        unlockAchievement('konami');
        return;
      }

      // Original Konami Code (for challenge seekers)
      console.log('Key pressed:', key, '| Expected:', konamiCode[konamiIndex], '| Progress:', konamiIndex + '/' + konamiCode.length);
      
      if (key === konamiCode[konamiIndex]) {
        setKonamiIndex(konamiIndex + 1);
        if (konamiIndex + 1 === konamiCode.length) {
          console.log('🎉 KONAMI CODE COMPLETE!');
          triggerKonamiEffect();
          setKonamiIndex(0);
          unlockAchievement('konami');
        }
      } else {
        if (konamiIndex > 0) {
          console.log('❌ Wrong key! Resetting...');
        }
        setKonamiIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [konamiIndex]);

  // Trigger Konami Effect
  const triggerKonamiEffect = () => {
    setShowConfetti(true);
    document.body.style.animation = 'rainbow 2s ease-in-out';
    
    setTimeout(() => {
      setShowConfetti(false);
      document.body.style.animation = '';
    }, 5000);
  };

  // Click/Touch Counter (works on all devices)
  useEffect(() => {
    let clickCount = 0;
    const handleInteraction = () => {
      clickCount++;
      if (clickCount === 100) {
        unlockAchievement('clicker');
      }
    };

    // Support both mouse clicks and touch events
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchend', handleInteraction);
    
    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchend', handleInteraction);
    };
  }, [achievements]);

  // Mobile Swipe Easter Egg (5 finger tap)
  useEffect(() => {
    let touchCount = 0;
    let touchTimer = null;

    const handleTouchStart = (e) => {
      // If 5 fingers touch at once, trigger easter egg
      if (e.touches.length >= 5) {
        e.preventDefault();
        console.log('🎉 5-FINGER TAP DETECTED!');
        triggerKonamiEffect();
        unlockAchievement('konami');
      }
      
      // Triple tap detection (mobile alternative)
      touchCount++;
      clearTimeout(touchTimer);
      
      if (touchCount === 3) {
        console.log('🎉 TRIPLE TAP DETECTED!');
        triggerKonamiEffect();
        unlockAchievement('konami');
        touchCount = 0;
      }
      
      touchTimer = setTimeout(() => {
        touchCount = 0;
      }, 500);
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      clearTimeout(touchTimer);
    };
  }, []);

  // Confetti Effect
  const renderConfetti = () => {
    if (!showConfetti) return null;
    
    return (
      <div className="confetti-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: ['#9467FB', '#a855f7', '#f97316', '#22d3ee', '#84cc16'][Math.floor(Math.random() * 5)],
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {renderConfetti()}
      
      {/* Konami Code Progress Indicator */}
      {konamiIndex > 0 && (
        <div className="konami-progress">
          <div className="konami-progress-text">
            Konami Code: {konamiIndex}/{konamiCode.length} 🎮
          </div>
          <div className="konami-progress-bar">
            <div 
              className="konami-progress-fill" 
              style={{ width: `${(konamiIndex / konamiCode.length) * 100}%` }}
            />
          </div>
        </div>
      )}
      
      {/* Achievement Notification */}
      {showAchievement && currentAchievement && (
        <div className="achievement-popup">
          <div className="achievement-content">
            <div className="achievement-title">🏆 Achievement Unlocked!</div>
            <div className="achievement-name">{currentAchievement.title}</div>
            <div className="achievement-desc">{currentAchievement.desc}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default EasterEggs;

