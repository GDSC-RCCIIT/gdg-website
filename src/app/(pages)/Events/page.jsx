"use client";
import React, { useEffect, useState } from 'react';
import './Events.css';
import EventItem from './EventItem';
import { motion } from 'framer-motion';
import axios from 'axios';

const EventsPage = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:5000/events")
            .then((response) => {
                console.log(response.data)
                setAllEvents(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        const scrollItems = allEvents.map(event => event.id);

        const handleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.height = '100%'; // Set height to 100% when the element is in view
                    observer.unobserve(entry.target); // Stop observing after it animates
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });

        scrollItems.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        // Smooth scroll to the top when the page loads
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [allEvents]);

    return (
        <div className="container">
            <div className="text-center pt-10">
                <motion.h1
                    className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text" initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Events
                </motion.h1>

                <motion.p
                    className="text-gray-600 text-xl mt-4 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Explore our Events and get involved by contribution/participation in our events!
                </motion.p>

            </div>
            
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                style={{ position: 'relative' }} 
                className="timeline"
            >
                {!loading ? (
                    allEvents.map((event, index) => (
                        <EventItem key={index} {...event} />
                    ))
                ) : (
                    <p>Loading events...</p>
                )}
            </motion.div>
        </div>
    );
};

export default EventsPage;
