"use client";
import { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setScrollPercentage(scrollPercent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-2 z-50">
            <div
                className="h-full rounded-full transition-all duration-150"
                style={{
                    width: `${scrollPercentage}%`,
                    background: `linear-gradient(to right, 
                        #ff0000, /* Red */
                        #ff7f00, /* Orange */
                        #ffff00, /* Yellow */
                        #0000ff, /* Blue */
                        #00ff00, /* Green */
                        #4b0082, /* Indigo */
                        #8b00ff /* Violet */
                    )`
                }}
            />
        </div>
    );
}
