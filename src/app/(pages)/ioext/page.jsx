import React from 'react';
import { Search, Calendar, Users, MapPin } from 'lucide-react';

// I/O Extended Page Component
const IOExtendedPage = () => {
    return (
        <div className="bg-gradient-to-br from-gray-100 to-blue-50">
            {/* Hero Section */}
            <div className="relative h-[550px] flex items-center justify-center text-center border-b border-gray-300 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-600">
                <div className="absolute inset-0 opacity-20">
                    <div className="w-96 h-96 bg-pink-500 rounded-full blur-[100px] opacity-70 absolute top-0 left-16"></div>
                    <div className="w-80 h-80 bg-blue-400 rounded-full blur-[120px] opacity-70 absolute bottom-0 right-28"></div>
                    <div className="w-72 h-72 bg-yellow-400 rounded-full blur-[90px] opacity-70 absolute bottom-10 left-1/2 transform -translate-x-1/2"></div>
                </div>
                <div className="relative z-10 max-w-4xl px-8 text-white">
                    <h1 className="text-6xl font-extrabold leading-tight drop-shadow-lg">
                        Google I/O Extended 2024
                    </h1>
                    <p className="mt-6 text-xl drop-shadow-md">
                        Google I/O Extended brings the excitement of Google I/O directly to your community. Join local I/O watch parties and meetups for the latest developer updates, technical talks, networking, and hands-on learning.
                    </p>
                    <a
                        href="#register"
                        className="inline-block mt-8 px-8 py-4 bg-yellow-400 text-blue-800 font-bold rounded-full shadow-lg hover:bg-yellow-500 transition-all ease-in-out duration-300"
                    >
                        Find an Event Near You
                    </a>
                </div>
            </div>

            {/* About Section */}
            <div className="mt-24 max-w-7xl mx-auto px-8 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="bg-white p-10 rounded-xl shadow-xl transition-transform transform hover:scale-105">
                        <h3 className="text-3xl font-bold text-blue-800 mb-6">Register</h3>
                        <p className="text-gray-600 text-lg">
                            Find a Google I/O Extended event near you and RSVP to secure your spot.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-xl shadow-xl transition-transform transform hover:scale-105">
                        <h3 className="text-3xl font-bold text-blue-800 mb-6">Join</h3>
                        <p className="text-gray-600 text-lg">
                            Attend a Google I/O Extended Watch Party or Meetup and connect in your city.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-xl shadow-xl transition-transform transform hover:scale-105">
                        <h3 className="text-3xl font-bold text-blue-800 mb-6">Learn</h3>
                        <p className="text-gray-600 text-lg">
                            Learn about the latest Google products from Google Developer Experts and local developers in your community.
                        </p>
                    </div>
                </div>
            </div>

            {/* Upcoming Events Section */}
            <div className="mt-32 max-w-7xl mx-auto px-8">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-5xl font-semibold text-gray-800">Upcoming Events</h2>
                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            <input
                                type="text"
                                className="pl-12 pr-6 py-3 border border-gray-400 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-600 shadow-sm"
                                placeholder="Search for a city..."
                            />
                            <Search className="w-6 h-6 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
                        </div>
                        <select className="py-3 px-6 border border-gray-400 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-600 shadow-sm">
                            <option>Filter by...</option>
                            <option>Workshop</option>
                            <option>Meetup</option>
                            <option>Watch Party</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {events.map((event, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
                            <div className="flex items-center mb-4">
                                <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                                <span className="font-semibold text-lg text-gray-700">{event.date}</span>
                            </div>
                            <h3 className="text-3xl font-semibold text-blue-800 mb-4">{event.title}</h3>
                            <div className="flex items-center mb-4">
                                <MapPin className="w-6 h-6 text-red-500 mr-2" />
                                <span className="text-gray-600 text-lg">{event.location}</span>
                            </div>
                            <p className="text-gray-600 text-lg">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Organizer Spotlight Section */}
            <div className="mt-32 py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
                <h2 className="text-5xl font-semibold mb-12">Organizer Spotlight</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                    <div className="bg-white p-10 rounded-xl text-blue-800 max-w-sm shadow-2xl">
                        <h3 className="text-3xl font-bold mb-4">Jane Doe</h3>
                        <p className="text-lg">"Being a GDG Organizer has been one of the most rewarding experiences of my life. The connections I've made are invaluable."</p>
                    </div>
                    <div className="bg-white p-10 rounded-xl text-blue-800 max-w-sm shadow-2xl">
                        <h3 className="text-3xl font-bold mb-4">John Smith</h3>
                        <p className="text-lg">"Leading a GDG chapter has allowed me to give back to the community and help others learn and grow as developers."</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const events = [
    { title: "GDG VODIY", location: "Namangan", date: "Nov 23", description: "Join us for an exciting developer meetup." },
    { title: "Google Mingle 24/25", location: "Hong Kong", date: "Nov 1", description: "Network with fellow developers in Hong Kong." },
    { title: "Malware Analysis Workshop", location: "Mansoura", date: "Sep 28", description: "Dive into malware analysis techniques." },
    { title: "GDG Surrey Tech Chat & Networking Event", location: "Surrey", date: "Nov 3", description: "Tech chat and networking for tech enthusiasts." },
    { title: "Technical Writing for Coastal Solutions 📝🌊", location: "Brunswick", date: "Nov 6", description: "Learn how to write technical documents effectively." },
    { title: "Malware Analysis Workshop", location: "Mansoura", date: "Sep 28", description: "Dive into malware analysis techniques." },
];

export default IOExtendedPage;
