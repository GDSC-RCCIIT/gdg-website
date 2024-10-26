import React from 'react';
import { Briefcase, Users, Globe, CheckCircle } from 'lucide-react';

// Colorful Google-inspired Hero Section
const Hero = () => {
    return (
        <div className="relative h-[500px] flex items-center justify-center text-center border-b border-gray-200 bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400">
            <div className="absolute inset-0 opacity-30">
                <div className="w-96 h-96 bg-red-500 rounded-full blur-2xl opacity-80 absolute top-0 left-20"></div>
                <div className="w-80 h-80 bg-green-500 rounded-full blur-2xl opacity-80 absolute bottom-0 right-40"></div>
                <div className="w-72 h-72 bg-yellow-400 rounded-full blur-2xl opacity-60 absolute top-20 right-20"></div>
            </div>

            <div className="relative z-10 max-w-3xl px-8 text-white">
                <h1 className="text-5xl font-bold leading-tight drop-shadow-lg">
                    Google Developer Groups Organizers
                </h1>
                <p className="mt-4 text-lg drop-shadow-md">
                    Passionate leaders dedicated to helping others learn and connect. Join us to empower and grow your local developer community.
                </p>
                <div className="mt-6 space-x-4">
                    <a
                        href="#"
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md font-semibold"
                    >
                        Lead a chapter
                    </a>
                    <a
                        href="#"
                        className="inline-block px-6 py-3 bg-white text-blue-600 border-2 border-gray-300 rounded-md hover:bg-gray-100 font-semibold"
                    >
                        Browse chapters
                    </a>
                </div>
            </div>
        </div>
    );
};

// Benefits Section
const Benefits = () => {
    const benefits = [
        {
            icon: <Briefcase className="w-8 h-8 text-blue-600" />,
            title: "Professional Growth",
            description: "Access community management training and technical knowledge to help you be a stronger leader. Invitations to select Google events.",
        },
        {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: "Network Growth",
            description: "Access a global network of developers, organizers, industry experts, and Googlers to gain mentorship and share knowledge.",
        },
        {
            icon: <Globe className="w-8 h-8 text-blue-600" />,
            title: "Community Learning",
            description: "Dedicated support to help educate and expand your community both online and in-person.",
        },
    ];

    return (
        <div className="mt-16 max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">Benefits of being an Organizer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="flex justify-center mb-4">{benefit.icon}</div>
                        <h3 className="text-2xl font-semibold text-gray-700">{benefit.title}</h3>
                        <p className="mt-3 text-gray-600">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Become an Organizer Section
const BecomeOrganizer = () => {
    const requirements = [
        "Must be over 18 years old",
        "Have a genuine interest in Google’s technologies",
        "Have a technical background",
        "Have experience with event planning",
        "Have some connection to the local developer community",
        "Have a passion for giving back to the community",
        "Host a meetup event ideally once a month",
    ];

    const stepsToApply = [
        "Read the Community Organizer Code of Conduct and Terms & Conditions",
        "Check the GDG directory to see if there’s an existing chapter in your location.",
        "If there’s a GDG chapter in your location, contact the current organizer(s) from the GDG Directory or in-person at an event to express interest in helping as a co-organizer.",
        "If there’s no GDG chapter in your location, apply here.",
    ];

    return (
        <div className="mt-20 max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-semibold text-center mb-12 text-indigo-600">Become an Organizer</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Requirements</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {requirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">How to Apply</h3>
                    <ol className="list-decimal list-inside text-gray-600 space-y-2">
                        {stepsToApply.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

// Organizer Guidelines Section
const OrganizerGuidelines = () => {
    const guidelines = [
        {
            title: "Be Nice",
            description: "Be friendly, welcoming, and a positive influence in your community.",
        },
        {
            title: "Be Respectful and Constructive",
            description: "Communicate constructively, avoid personal attacks, and resolve issues with respect.",
        },
        {
            title: "Collaborate",
            description: "Work together, share knowledge, and help each other.",
        },
        {
            title: "Participate",
            description: "Engage in discussions, attend meetings, and contribute to community initiatives.",
        },
    ];

    return (
        <div className="mt-20 max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">Organizer Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {guidelines.map((guideline, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-2">{guideline.title}</h3>
                        <p className="text-gray-600">{guideline.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Organizer Acknowledgements Section
const OrganizerAcknowledgements = () => {
    const acknowledgements = [
        "The GDG logo and name is granted for use by organizers in good standing with Google Developers.",
        "GDG chapters must remain active and run at least 1 event every 90 days.",
        "GDG chapter organizers are expected to communicate with their Google Regional Lead as required.",
        "It’s OK to partner with other groups and companies to increase reach and collaboration.",
        "It’s OK to discuss non-Google technologies in your community without criticism of other companies.",
    ];

    return (
        <div className="mt-20 max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-semibold text-center mb-12 text-indigo-600">Organizer Acknowledgements</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
                {acknowledgements.map((ack, index) => (
                    <li key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        {ack}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Main Organizer Page Component
const OrganizerPage = () => {
    return (
        <div>
            <Hero />
            <Benefits />
            <BecomeOrganizer />
            <OrganizerGuidelines />
            <OrganizerAcknowledgements />
        </div>
    );
};

export default OrganizerPage;
