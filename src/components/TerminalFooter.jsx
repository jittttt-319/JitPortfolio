import React, { useState, useRef, useEffect } from 'react';

const TerminalFooter = ({ onStartGame }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to the interactive footer terminal. Type "help" for commands.' }
    ]);
    const [matrixMode, setMatrixMode] = useState(false);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
        "A SQL query walks into a bar, walks up to two tables and asks: 'Can I JOIN you?' 🍺",
        "There are 10 types of people: those who understand binary and those who don't. 💻",
        "Why do Java developers wear glasses? Because they don't C#! 👓",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡"
    ];

    const commands = {
        help: 'Available commands: help, email, github, linkedin, instagram, clear, about, joke, coffee, matrix, hack, snake, secret, party',
        email: 'jitxuan2021@gmail.com',
        github: 'Opening GitHub...',
        linkedin: 'Opening LinkedIn...',
        instagram: 'Opening Instagram...',
        about: 'I am a software engineer passionate about building great web apps.',
        clear: 'CLEAR_TERMINAL',
        joke: 'RANDOM_JOKE',
        coffee: '☕ Brewing coffee... *slurp* Ahh, that hits the spot!',
        matrix: 'MATRIX_MODE',
        hack: 'HACK_MODE',
        snake: 'SNAKE_GAME',
        secret: 'SECRET_MODE',
        party: 'PARTY_MODE'
    };

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();

        if (cleanCmd === 'clear') {
            setHistory([]);
            return;
        }

        // Social media links
        if (cleanCmd === 'github') {
            window.open('https://github.com/jittttt-319', '_blank');
        } else if (cleanCmd === 'linkedin') {
            window.open('https://www.linkedin.com/in/ling-jit-xuan-5051a8288', '_blank');
        } else if (cleanCmd === 'instagram') {
            window.open('https://www.instagram.com/jitxuannnnnn/', '_blank');
        }

        // Fun commands
        let response;
        if (cleanCmd === 'joke') {
            response = jokes[Math.floor(Math.random() * jokes.length)];
        } else if (cleanCmd === 'matrix') {
            response = '🟢 Entering the Matrix... Wake up, Neo...';
            setMatrixMode(true);
            setTimeout(() => setMatrixMode(false), 3000);
        } else if (cleanCmd === 'hack') {
            response = `🔐 Initializing hack sequence...\n> Connecting to mainframe...\n> Bypassing firewall...\n> Access granted! Just kidding 😄`;
        } else if (cleanCmd === 'snake') {
            response = '🐍 Launching Snake Game... Use arrow keys to play!';
            if (onStartGame) {
                setTimeout(() => onStartGame(), 500);
            }
        } else if (cleanCmd === 'secret' || cleanCmd === 'party') {
            response = cleanCmd === 'secret' ? '🎮 SECRET EASTER EGG ACTIVATED! ✨' : '🎉 PARTY MODE ACTIVATED! 🎊';
            // Trigger confetti effect by simulating Ctrl+K
            window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
        } else {
            response = commands[cleanCmd] || `Command not found: ${cleanCmd}. Type "help" for list.`;
        }

        setHistory(prev => [
            ...prev,
            { type: 'command', content: cmd },
            { type: 'output', content: response }
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;
        handleCommand(input);
        setInput('');
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <footer className="terminal-footer">
            <div className={`terminal-window ${matrixMode ? 'matrix-mode' : ''}`}>
                <div className="terminal-header">
                    <div className="terminal-buttons">
                        <span className="terminal-btn close"></span>
                        <span className="terminal-btn minimize"></span>
                        <span className="terminal-btn maximize"></span>
                    </div>
                    <div className="terminal-title">visitor@portfolio:~/footer</div>
                </div>
                <div className="terminal-body" ref={terminalRef} onClick={() => inputRef.current?.focus()}>
                    {history.map((line, i) => (
                        <div key={i} className={`terminal-line ${line.type}`}>
                            {line.type === 'command' && <span className="prompt">➜ ~</span>}
                            {line.content.split('\n').map((text, idx) => (
                                <div key={idx}>{text}</div>
                            ))}
                        </div>
                    ))}
                    <form onSubmit={handleSubmit} className="terminal-input-line">
                        <span className="prompt">➜ ~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="terminal-input"
                            autoFocus
                        />
                    </form>
                </div>
            </div>
            <div className="footer-social-links">
                <a href="https://github.com/jittttt-319" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                <a href="https://www.linkedin.com/in/ling-jit-xuan-5051a8288" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                <a href="https://www.instagram.com/jitxuannnnnn/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            </div>
            <div className="footer-copyright">
                © {new Date().getFullYear()} Jit. All rights reserved.
            </div>
        </footer>
    );
};

export default TerminalFooter;
