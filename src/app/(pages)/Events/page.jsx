"use client";
import React, { useEffect } from 'react';
import './Events.css';
import EventItem from './EventItem';
import { motion } from 'framer-motion';
import axios from 'axios';


const EventsPage = () => {
    const events = [
        {
            title: 'GDSC RCCIIT Event : #1',
            date: '18 Jul 2024',
            description: (
                <>
                    Session Highlights:
                    <br />
                    🔍 Live GitHub Profile Reviews: Get feedback on your GitHub profile.
                    <br />
                    💡 Tips to Enhance Your GitHub: Learn valuable tips and tricks to make your profile stand out.
                </>
            ),
            videoSrc: 'https://www.youtube.com/embed/H6sHvucuphU?si=qJoRcNyq2GcC2z3C',
            id: 'scroll1',
        },
        {
            title: 'GDSC RCCIIT Event : #2',
            date: '21 Jul 2024',
            description: (
                <>
                    Session Highlights:
                    <br />
                    🔍 Live GitHub Profile Reviews: Get feedback on your GitHub profile.
                    <br />
                    💡 Tips to Enhance Your GitHub: Learn valuable tips and tricks to make your profile stand out.
                </>
            ),
            videoSrc: 'https://www.youtube.com/embed/H6sHvucuphU?si=qJoRcNyq2GcC2z3C',
            id: 'scroll2',
        },
        {
            title: 'GDSC RCCIIT Event : #3',
            date: '7 Aug 2024',
            description: (
                <>
                    Session Highlights:
                    <br />
                    🔍 Live GitHub Profile Reviews: Get feedback on your GitHub profile.
                    <br />
                    💡 Tips to Enhance Your GitHub: Learn valuable tips and tricks to make your profile stand out.
                </>
            ),
            videoSrc: 'https://www.youtube.com/embed/H6sHvucuphU?si=qJoRcNyq2GcC2z3C',
            id: 'scroll3',
        },
    ];

    useEffect(() => {
        const scrollItems = events.map(event => event.id);

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
    }, [events]);

    const [allEvents, setAllEvents] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:5000/events")
        .then((response) => {
        setAllEvents(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);

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
                    {events.map((event, index) => (
                        <EventItem key={index} {...event} />
                    ))}
            </motion.div>
        </div>
    );
};

export default EventsPage;