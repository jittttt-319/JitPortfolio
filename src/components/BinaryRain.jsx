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
        for (let i = 0; i < columns; i++) {
            drops[i] = {
                x: i * fontSize,
                y: Math.random() * -height,
                targetX: i * fontSize,
                vx: 0,
                vy: 0,
                speed: 1.5 + Math.random() * 2,
                wobble: Math.random() * Math.PI * 2,
                wobbleSpeed: 0.05 + Math.random() * 0.1,
                char: characters.charAt(Math.floor(Math.random() * characters.length)),
                lastCharChange: 0
            };
        }

        const CURSOR_RADIUS = 120;

        const draw = () => {
            const { x: mx, y: my } = mouseRef.current;

            ctx.fillStyle = 'rgba(10, 25, 47, 0.06)';
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px monospace`;
            ctx.textBaseline = 'top';

            const now = Date.now();

            for (let i = 0; i < drops.length; i++) {
                const drop = drops[i];

                // Update Y position (falling)
                drop.y += drop.speed;

                // Mouse interaction / repulsion
                const dx = drop.x - mx;
                const dy = drop.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const proximity = Math.max(0, 1 - dist / CURSOR_RADIUS);

                if (proximity > 0) {
                    // Repulsion force
                    const force = proximity * 5; // strength of push
                    const angle = Math.atan2(dy, dx);
                    drop.vx += Math.cos(angle) * force;
                    drop.vy += Math.sin(angle) * force * 0.5;
                }

                // Spring physics to pull back to targetX
                const springK = 0.08;
                const damping = 0.85;
                const ax = (drop.targetX - drop.x) * springK;
                drop.vx += ax;
                drop.vx *= damping;
                drop.x += drop.vx;

                // Apply vertical velocity damping and integration
                drop.vy *= damping;
                drop.y += drop.vy;

                // Wobble phase update
                drop.wobble += drop.wobbleSpeed + proximity * 0.1;

                // Randomly change character occasionally
                if (now - drop.lastCharChange > 200 + Math.random() * 800) {
                    drop.char = characters.charAt(Math.floor(Math.random() * characters.length));
                    drop.lastCharChange = now;
                }

                // Render with squash and stretch (jelly effect)
                ctx.save();

                // Translate to drop center
                ctx.translate(drop.x, drop.y);

                // Calculate squash and stretch factors
                const speed = Math.sqrt(drop.vx * drop.vx + (drop.speed + drop.vy) * (drop.speed + drop.vy));
                const stretch = Math.min(1.5, 1 + speed * 0.02);

                // Jelly wobble scaling
                const wobbleScaleX = 1 + Math.sin(drop.wobble) * 0.15 * (1 + proximity);
                const wobbleScaleY = 1 - Math.sin(drop.wobble) * 0.15 * (1 + proximity);

                const scaleX = wobbleScaleX / stretch;
                const scaleY = wobbleScaleY * stretch;

                ctx.scale(scaleX, scaleY);

                // Color and glow
                if (proximity > 0) {
                    const glowAlpha = 0.6 + proximity * 0.4;
                    ctx.shadowColor = `rgba(255, 255, 255, ${proximity})`;
                    ctx.shadowBlur = proximity * 25;
                    const r = Math.round(148 + proximity * 107);
                    const g = Math.round(103 + proximity * 152);
                    const b = Math.round(251 + proximity * 4);
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${glowAlpha})`;
                } else {
                    ctx.shadowBlur = 0;
                    ctx.fillStyle = '#9467FB';
                }

                // Draw text centered at (0, 0)
                ctx.textAlign = 'center';
                ctx.fillText(drop.char, 0, 0);

                ctx.restore();

                // Reset drop if it goes off screen
                if (drop.y > height) {
                    drop.y = -Math.random() * 100 - fontSize;
                    drop.x = drop.targetX;
                    drop.vx = 0;
                    drop.vy = 0;
                    drop.speed = 1.5 + Math.random() * 2;
                }
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
                    drops[i].y = e.clientY - Math.random() * 50;
                    drops[i].vx += (Math.random() - 0.5) * 5;
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

            if (drops.length < columns) {
                for (let i = drops.length; i < columns; i++) {
                    drops.push({
                        x: i * fontSize,
                        y: Math.random() * -height,
                        targetX: i * fontSize,
                        vx: 0,
                        vy: 0,
                        speed: 1.5 + Math.random() * 2,
                        wobble: Math.random() * Math.PI * 2,
                        wobbleSpeed: 0.05 + Math.random() * 0.1,
                        char: characters.charAt(Math.floor(Math.random() * characters.length)),
                        lastCharChange: 0
                    });
                }
            } else if (drops.length > columns) {
                drops.splice(columns);
            }

            for (let i = 0; i < drops.length; i++) {
                drops[i].targetX = i * fontSize;
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
