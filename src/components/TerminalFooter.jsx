import React, { useState, useRef, useEffect } from 'react';

const TerminalFooter = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to the interactive footer terminal. Type "help" for commands.' }
    ]);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    const commands = {
        help: 'Available commands: help, email, github, linkedin, instagram, clear, about',
        email: 'jitxuan2021@gmail.com',
        github: 'Opening GitHub...',
        linkedin: 'Opening LinkedIn...',
        instagram: 'Opening Instagram...',
        about: 'I am a software engineer passionate about building great web apps.',
        clear: 'CLEAR_TERMINAL'
    };

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();

        if (cleanCmd === 'clear') {
            setHistory([]);
            return;
        }

        if (cleanCmd === 'github') {
            window.open('https://github.com/jittttt-319', '_blank');
        } else if (cleanCmd === 'linkedin') {
            window.open('https://www.linkedin.com/in/ling-jit-xuan-5051a8288', '_blank');
        } else if (cleanCmd === 'instagram') {
            window.open('https://www.instagram.com/jitxuannnnnn/', '_blank');
        }

        const response = commands[cleanCmd] || `Command not found: ${cleanCmd}. Type "help" for list.`;

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
            <div className="terminal-window">
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
                            {line.content}
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
