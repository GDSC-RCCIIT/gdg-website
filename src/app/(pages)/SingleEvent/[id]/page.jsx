'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

// Dummy event data
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

const SingleEvent = ({ params }) => {

    const id = params.id; // Extract the id from the query

    // Find the event matching the extracted id
    const event = events.find(event => event.id === id);

    // Check if the event exists
    if (!event) {
        return <p>Event not found.</p>; // Handle case where event doesn't exist
    }

    return (
        <div className='p-4 '>
            <h2 className="text-3xl font-bold sm:text-4xl text-center mt-4 mb-2">{event.title}</h2>
            <p className='text-sm text-center text-gray-500 '>{event.date}</p>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                    {event.videoSrc && (
                        <div className="banner">
                            <iframe
                                width="100%"
                                height="315"
                                src={event.videoSrc}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>

                <div className="lg:py-16">
                    <article className="space-y-4 text-gray-600">
                        <p>
                            {event.description}
                        </p>
                    </article>
                </div>
            </div>


            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms
*/}

            <section className="bg-gray-50">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Subscribe to our Newsletter
                        </h2>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            We welcome all and all for a chat with us!
                        </p>
                    </div>

                    <div className="mx-auto mt-8 max-w-xl">
                        <form action="#" className="sm:flex sm:gap-4">
                            <div className="sm:flex-1">
                                <label htmlFor="email" className="sr-only">Email</label>

                                <input
                                    type="email"
                                    disabled
                                    placeholder="Email address"
                                    className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                            >
                                <span className="text-sm font-medium"> Sign Up </span>

                                <svg
                                    className="size-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleEvent;
