import React, { useState, useEffect } from 'react';

const isTouchDevice = () =>
    typeof window !== 'undefined' &&
    (navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches);

const SpotlightCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    if (isTouchDevice()) return null;

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            );
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="spotlight-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
            }}
        />
    );
};

export default SpotlightCursor;
