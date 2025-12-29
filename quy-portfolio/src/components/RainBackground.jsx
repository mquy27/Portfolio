import { div } from 'framer-motion/client';
import React, { useMemo } from 'react';

const RainBackground = () => {
    const drops = useMemo(() => {
        return Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDelay: Math.random() * 5,
            animationDuration: 2 + Math.random() * 3,
            opacity: 0.3 + Math.random() * 0.4,
        }));
    }, []);
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none ">
            {drops.map((drop) => (
                <div
                    key={drop.id}
                    className="absolute top-0 animate-rain-x"
                    style={{
                        left: `${drop.left}%`,
                        animationDelay: `${drop.animationDelay}s`,
                        animationDuration: `${drop.animationDuration}s`,
                    }}
                >
                    <div
                        className="w-[2px] bg-linear-to-b from-transparent via-indigo-400 to-transparent animate-rain-y opacity-70 rounded-full"
                        style={{
                            height: '120px',
                            animationDelay: `${drop.animationDelay}s`,
                            animationDuration: `${drop.animationDuration}s`,
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default RainBackground;