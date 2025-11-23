import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text }) => {
    const [displayedCode, setDisplayedCode] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [showOutput, setShowOutput] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const codeTemplate = `System.out.print("${text}")`;

    useEffect(() => {
        if (currentIndex < codeTemplate.length) {
            const timeout = setTimeout(() => {
                setDisplayedCode(codeTemplate.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 50); // Typing speed: 50ms per character

            return () => clearTimeout(timeout);
        } else {
            setIsTypingComplete(true);
        }
    }, [currentIndex, codeTemplate]);

    const handleRun = () => {
        setShowOutput(true);
    };

    return (
        <div className="typing-container">
            {!showOutput ? (
                <div className="code-editor">
                    <div className="code-header">
                        <div className="code-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <span className="code-title">Main.java</span>
                    </div>
                    <div className="code-content">
                        <span className="code-text">
                            {displayedCode}
                            {!isTypingComplete && <span className="cursor-blink">|</span>}
                        </span>
                    </div>
                    {isTypingComplete && (
                        <button
                            className="run-button"
                            onClick={handleRun}
                        >
                            ▶ Run
                        </button>
                    )}
                </div>
            ) : (
                <div className="output-container">
                    <div className="output-header">Output:</div>
                    <div className="output-text">{text}</div>
                </div>
            )}
        </div>
    );
};

export default TypingAnimation;
