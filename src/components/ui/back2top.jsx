"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FaAnglesUp } from "react-icons/fa6";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 180) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const smoothScrollToTop = () => {
        const scrollY = window.pageYOffset;
        const scrollStep = Math.max(10, Math.floor(scrollY / 20));
        if (scrollY > 0) {
            window.scrollBy(0, -scrollStep);
            requestAnimationFrame(smoothScrollToTop);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div>
            {isVisible && (
                <Button
                    onClick={() => requestAnimationFrame(smoothScrollToTop)}
                    className="fixed bottom-4 right-4 w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md hover:bg-green-600 hover:scale-105 transition z-50 text-[30px]"
                >
                    <FaAnglesUp/>
                </Button>
            )}
        </div>
    );
};

export default ScrollToTop;
