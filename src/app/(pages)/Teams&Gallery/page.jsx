"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { DividerHorizontalIcon } from '@radix-ui/react-icons';

const Teams = () => {
    const teams = [
        {
            name: 'Core Team',
            folder: 'Core Team',
            members: [
                {
                    name: 'Anurag Jha',
                    designation: 'GDSC Lead',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Ayush Pandit',
                    designation: 'Dev Lead',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Atanu Nayak',
                    designation: 'Dev Lead',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Akancha Singh',
                    designation: 'Events Lead',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
            ],
        },
        {
            name: 'Dev Team',
            folder: 'Dev Team',
            members: [
                {
                    name: 'Aditya Mayukh Som',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Arka Dutta',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Ayantik Bhaumik',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Bhavesh Agarwal',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
            ],
        },
        {
            name: 'ML Team',
            folder: 'ML Team',
            members: [
                {
                    name: 'Parthiv Sarkar',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Shakya Majumdar',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Sheetali Maity',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Soumyadipto Pal',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
            ],
        },
        {
            name: 'Events Team',
            folder: 'Events Team',
            members: [
                {
                    name: 'Anurag Dey',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Ayantik Bhaumik',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Debanuj Basak',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Gaurav Bose',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
            ],
        },
        {
            name: 'Design Team',
            folder: 'Design Team',
            members: [
                {
                    name: 'Aindree Chatterjee',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Anurag Dey',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Apurba Nandi',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
                {
                    name: 'Koustav Bhattacharjee',
                    imageSrc: '/avatar.png',
                    linkedin: 'www.linkedin.com',
                },
            ],
        },
    ];

    return (
        <>
            <section className='bg-white'>

                <div className='bg-white'>
                    {teams.map((team, teamIndex) => (
                        <div key={teamIndex} className='team-section'>
                            <h2 className='text-4xl font-extrabold text-center mb-8 mt-8'>{team.name}</h2>
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    gap: '30px',
                                }}
                            >
                                {team.members.map((member, memberIndex) => (
                                    <div
                                        key={memberIndex}
                                        style={{
                                            textAlign: 'center',
                                            flex: '1 1 40%',
                                            maxWidth: '200px',
                                            padding: '20px',
                                            margin: '10px',
                                            border: '2px solid #ddd',
                                            borderRadius: '10px',
                                            backgroundColor: '#f9f9f9',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        <Image
                                            src={member.imageSrc}
                                            alt={member.name}
                                            width={100}
                                            height={100}
                                            style={{
                                                borderRadius: '50%',
                                                marginBottom: '15px',
                                            }}
                                        />
                                        <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{member.name}</h3>
                                        <p style={{ color: '#777', marginBottom: '12px' }}>{member.designation}</p>
                                        <a
                                            href={member.linkedin}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={{
                                                color: '#0077b5',
                                                textDecoration: 'none',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            <FaLinkedin /> LinkedIn
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                    <hr className='mt-8'/>

                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Our Gallery</h2>

                        <p className="mx-auto mt-4 max-w-md text-gray-500">
                            Want to know more about US? Then why are you waiting join us today and be a part of these Precious events.
                        </p>
                    </header>

                    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <li>
                            <a href="#" className="group relative block">
                                <img
                                    src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />

                                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-xl font-medium text-white">IPC Conference</h3>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="group relative block">
                                <img
                                    src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />

                                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-xl font-medium text-white">Winter Shorts</h3>
                                </div>
                            </a>
                        </li>

                        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                            <a href="#" className="group relative block">
                                <img
                                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />

                                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-xl font-medium text-white">Skinny code Hackathon</h3>


                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Teams;
