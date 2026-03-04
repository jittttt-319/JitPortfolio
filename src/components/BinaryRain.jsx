import React, { useEffect, useRef } from 'react';

const BinaryRain = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const characters = '01';
        const fontSize = 14;
        let columns = Math.floor(width / fontSize);

        const drops = [];
        const speeds = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -height / fontSize;
            speeds[i] = 1;
        }

        const CURSOR_RADIUS = 120;

        const draw = () => {
            const { x: mx, y: my } = mouseRef.current;

            ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const colX = i * fontSize;
                const dropY = drops[i] * fontSize;

                const dx = colX - mx;
                const dy = dropY - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const proximity = Math.max(0, 1 - dist / CURSOR_RADIUS);

                if (proximity > 0) {
                    // Glow effect for characters near cursor
                    const glowAlpha = 0.6 + proximity * 0.4;
                    ctx.shadowColor = `rgba(255, 255, 255, ${proximity})`;
                    ctx.shadowBlur = proximity * 32;
                    ctx.fillStyle = `rgba(${Math.round(148 + proximity * 107)}, ${Math.round(103 + proximity * 152)}, ${Math.round(251 + proximity * 4)}, ${glowAlpha})`;
                } else {
                    ctx.shadowBlur = 0;
                    ctx.fillStyle = '#9467FB';
                }

                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, colX, dropY);

                // Accelerate drops near cursor
                speeds[i] = 1 + proximity * 3;

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i] += speeds[i];
            }

            ctx.shadowBlur = 0;
        };

        const interval = setInterval(draw, 33);

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            // Trigger fresh burst of drops near cursor
            const cursorCol = Math.floor(e.clientX / fontSize);
            const burstRange = Math.floor(CURSOR_RADIUS / fontSize);
            for (let i = cursorCol - burstRange; i <= cursorCol + burstRange; i++) {
                if (i >= 0 && i < drops.length && Math.random() > 0.85) {
                    drops[i] = Math.floor(e.clientY / fontSize) - Math.random() * 5;
                }
            }
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -9999, y: -9999 };
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            columns = Math.floor(width / fontSize);
            while (drops.length < columns) {
                drops.push(Math.random() * -height / fontSize);
                speeds.push(1);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.45,
                pointerEvents: 'none'
            }}
        />
    );
};

export default BinaryRain;
