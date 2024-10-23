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
                        #4285F4 0%,  /* Google Blue */
                        #34A853 25%, /* Google Green */
                        #FBBC05 50%, /* Google Yellow */
                        #EA4335 75%  /* Google Red */
                    )`,
                    borderRadius: '0px', // Sharp rectangle edges
                    height: '8px' // Adjust height if needed for better realism
                }}
            />
        </div>
    );
}
