"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { teams } from './Teams';

const Skeleton = ({ className, style }) => (
    <div className={`animate-pulse bg-gray-300 rounded ${className}`} style={style}></div>
);

const Teams = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className="flex flex-col items-center justify-center py-6">
                <div className="flex flex-wrap justify-center">
                    {loading
                        ? Array.from({ length: 14 }).map((_, index) => (
                            <Skeleton key={index} className="w-40 h-40 m-8 rounded-full" />
                        ))
                        : teams.map((team, index) => (
                        <div key={index} className="flex flex-col items-center justify-center py-8">
                            <motion.h1
                                className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {team.name}
                            </motion.h1>
                            <div className="flex flex-wrap justify-center">
                                <TeamGroup team={team} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <motion.h1
                        className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Gallery
                    </motion.h1>
                    <p className="mx-auto mt-4 max-w-md text-gray-500">
                        Want to know more about us? Join us today and be a part of these precious events.
                    </p>
                </header>

                <motion.ul
                    className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {loading
                        ? Array.from({ length: 3 }).map((_, index) => (
                            <Skeleton key={index} className="h-48 w-full rounded-xl" />
                        ))
                        : galleryItems.map((item, index) => (
                            <GalleryItem key={index} item={item} index={index} />
                        ))
                    }
                </motion.ul>
            </div>
        </div>
    );
};

const TeamGroup = ({ team, loading }) => {
    return (
        <>
            {loading
                ? Array.from({ length: team.members.length }).map((_, index) => (
                    <Skeleton key={index} className="w-40 h-40 m-8 rounded-full" />
                ))
                :team.members.map((member, index) => (
                <TeamMember
                    key={index}
                    index={index}
                    name={member.name}
                    designation={member.designation}
                    imageSrc={member.imageSrc}
                    linkedin={member.linkedin}
                />
            ))}
        </>
    );
};

const TeamMember = ({ name, designation, imageSrc, linkedin, index }) => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center m-8"
            initial={{ opacity: 0, y: 50, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.1,
                type: 'spring',
                stiffness: 110,
                delay: 0.1 * index,
            }}
        >
            <div className="w-40 h-40 relative">
                <Image
                    src={imageSrc}
                    alt={name}
                    layout="fill"
                    className="rounded-full shadow-2xl object-cover"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <motion.p
                className="text-gray-800 font-semibold dark:text-white"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.3,
                    type: 'spring',
                    stiffness: 110,
                    delay: 0.1 * index,
                }}
            >
                {name}
            </motion.p>
            <p className="text-gray-600 dark:text-white">{designation}</p>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={25} className="text-black dark:text-white" />
            </a>
        </motion.div>
    );
};

const galleryItems = [
    {
        title: 'IPC Conference',
        imageUrl:
            'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'IPC Conference',
        imageUrl:
            'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'IPC Conference',
        imageUrl:
            'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Winter Shorts',
        imageUrl:
            'https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Winter Shorts',
        imageUrl:
            'https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Skinny code Hackathon',
        imageUrl:
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Skinny code Hackathon',
        imageUrl:
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Skinny code Hackathon',
        imageUrl:
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Skinny code Hackathon',
        imageUrl:
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

const GalleryItem = ({ item, index }) => {
    return (
        <motion.li
            className={`group relative block ${index % 3 === 0 ? 'lg:col-span-2 lg:row-span-2 lg:col-start-2' : 'lg:col-span-1 lg:row-span-1 lg:col-start-1'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.3,
                type: 'spring',
                stiffness: 100,
                delay: 0.1 * index,
            }}
        >
            <img
                src={item.imageUrl}
                alt={item.title}
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            </div>
        </motion.li>
    );
};

export default Teams;
