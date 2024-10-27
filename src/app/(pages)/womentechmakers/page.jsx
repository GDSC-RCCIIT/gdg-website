"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Users, Calendar, Mic, Heart } from 'lucide-react';

// Header Section with Vibrant Background
const Header = () => {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white py-24 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-4">Women Techmakers</h1>
                <p className="text-xl font-medium">
                    Building a world where all women can thrive in tech. Google’s Women Techmakers program provides visibility, community, and resources for women in technology.
                </p>
            </div>
        </div>
    );
};

// Stats Section with Animated Counters
const Stats = () => {
    const statsData = [
        { icon: <Users className="w-10 h-10 text-purple-600" />, label: "Ambassadors", value: 2674 },
        { icon: <Calendar className="w-10 h-10 text-pink-600" />, label: "Events", value: 1264 },
        { icon: <Mic className="w-10 h-10 text-indigo-600" />, label: "Speaking Engagements", value: 1353 },
        { icon: <Heart className="w-10 h-10 text-red-500" />, label: "Members", value: 82500 },
    ];

    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);
    const countersRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.unobserve(sectionRef.current);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(sectionRef.current);
    }, []);

    useEffect(() => {
        if (visible) {
            countersRef.current.forEach((counter, index) => animateCounter(counter, statsData[index].value));
        }
    }, [visible, statsData]);

    const animateCounter = (element, target) => {
        let start = 0;
        const duration = 3000;
        const increment = Math.ceil(target / 100);
        const stepTime = duration / (target / increment);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.innerText = target;
                clearInterval(timer);
            } else {
                element.innerText = start;
            }
        }, stepTime);
    };


    return (
        <div ref={sectionRef} className="py-16 bg-white">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Impact</h2>
            <div className="flex flex-wrap justify-center gap-10 px-6">
                {statsData.map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md w-64"
                    >
                        <div className="mb-3">{stat.icon}</div>
                        <h3
                            className="text-3xl font-bold text-gray-800"
                            ref={(el) => (countersRef.current[index] = el)}
                        >
                            {visible ? 0 : stat.value}
                        </h3>
                        <p className="text-lg text-gray-600">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Opportunities Section with Dual Columns
const Opportunities = () => {
    const opportunities = [
        {
            title: "Become an Ambassador",
            description:
                "Lead, network, learn, and shine as a Women Techmakers Ambassador. Become a visible leader in your community.",
            buttonText: "Learn more",
        },
        {
            title: "Become a Member",
            description:
                "Empower other women in their careers by organizing events and providing access to curated resources.",
            buttonText: "Learn more",
        },
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                {opportunities.map((opportunity, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">{opportunity.title}</h3>
                        <p className="text-lg text-gray-600 mb-6">{opportunity.description}</p>
                        <button className="text-white bg-purple-600 px-6 py-2 rounded-md hover:bg-purple-700">
                            {opportunity.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Stories Section with Card Layout
const Stories = () => {
    const stories = [
        {
            title: "Meet Nhasala, WTM Ambassador in Kathmandu",
            description:
                "Nhasala Joshi co-founded Women Leaders in Technology in Nepal. She advocates for women's rights in the workplace and understands the need for strong mentors in technology.",
        },
        {
            title: "Black Women in Tech: A.M. Darke",
            description: "A.M. Darke is a gaming designer creating better representation in the gaming world.",
        },
        {
            title: "Learn UX Writing with Google",
            description: "Explore the fundamentals of UX writing through Google’s mortgage calculator project.",
        },
        {
            title: "Meet Hanane Ait Dabel",
            description: "Hanane Ait Dabel, a WTM Ambassador, shares her journey and insights in tech.",
        },
    ];

    return (
        <div className="py-20 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Stories from Our Community</h2>
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {stories.map((story, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{story.title}</h3>
                        <p className="text-lg text-gray-600">{story.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Social Media Section
const SocialMedia = () => {
    const socials = [
        { platform: "YouTube", icon: "📺", link: "#" },
        { platform: "Twitter", icon: "🐦", link: "#" },
        { platform: "LinkedIn", icon: "🔗", link: "#" },
        { platform: "Instagram", icon: "📷", link: "#" },
    ];

    return (
        <div className="py-16 bg-purple-600 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
            <p className="text-lg mb-8">Follow Women Techmakers for the latest news and updates.</p>
            <div className="flex justify-center gap-10">
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        className="text-4xl hover:scale-110 transition transform"
                        aria-label={social.platform}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

// Merchandise Section with Links
const Merchandise = () => {
    return (
        <div className="py-20 bg-white text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get Your Official Women Techmakers Merchandise</h2>
            <div className="space-x-4">
                <a
                    href="#"
                    className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700"
                >
                    US Store
                </a>
                <a
                    href="#"
                    className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300"
                >
                    International Store
                </a>
            </div>
        </div>
    );
};

// Main Women Techmakers Page Component
const WomenTechmakersPage = () => {
    return (
        <div>
            <Header />
            <Opportunities />
            <Stats />
            <Stories />
            <SocialMedia />
            <Merchandise />
        </div>
    );
};

export default WomenTechmakersPage;
