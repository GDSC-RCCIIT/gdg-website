import React from 'react';
import { CheckCircle, FileText, Users } from 'lucide-react';

// Header with Soft Background and Floating Style
const Header = () => {
    return (
        <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 py-24 flex justify-center items-center">
            <div className="absolute -top-10 -left-20 w-80 h-80 bg-blue-300 rounded-full opacity-30 blur-lg"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-400 rounded-full opacity-20 blur-lg"></div>
            <div className="relative z-10 max-w-3xl text-center">
                <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-lg">Who Can Apply</h1>
                <p className="mt-4 text-lg text-gray-700 drop-shadow-sm max-w-xl mx-auto">
                    Learn about the qualifications needed to become a Google Developer Group Organizer and join a global community of passionate developers.
                </p>
            </div>
        </div>
    );
};

// Creative Requirements Section with Card-Based Layout
const Requirements = () => {
    const requirements = [
        { icon: <CheckCircle className="w-8 h-8 text-green-500" />, title: "18+ Age", description: "Applicants must be over 18 years old." },
        { icon: <FileText className="w-8 h-8 text-blue-500" />, title: "Interest in Google Technologies", description: "A genuine interest in Google technologies and a desire to share knowledge." },
        { icon: <Users className="w-8 h-8 text-yellow-500" />, title: "Community Experience", description: "Experience with community building or event planning is valued." },
        { icon: <CheckCircle className="w-8 h-8 text-red-500" />, title: "Technical Background", description: "A technical background is essential for understanding developer needs." },
    ];

    return (
        <div className="py-16 bg-gray-50">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Basic Requirements</h2>
            <div className="flex flex-wrap justify-center gap-8 px-6">
                {requirements.map((req, index) => (
                    <div key={index} className="bg-white w-80 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <div className="flex justify-center mb-4">{req.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 text-center">{req.title}</h3>
                        <p className="mt-2 text-gray-600 text-center">{req.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Steps to Apply Section with Vertical Timeline
const HowToApply = () => {
    const steps = [
        "Review the Community Organizer Code of Conduct and Terms & Conditions.",
        "Check the GDG Directory to find if there’s an existing chapter in your location.",
        "If there’s a GDG chapter, connect with current organizers to discuss your role.",
        "If no chapter exists, submit an application on the GDG platform.",
        "Allow time for processing. We will reach out if your application is selected.",
    ];

    return (
        <div className="py-20 bg-white">
            <h2 className="text-4xl font-bold text-center text-indigo-800 mb-10">How to Apply</h2>
            <div className="flex flex-col items-center space-y-8 px-8">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 w-full max-w-2xl bg-indigo-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:bg-indigo-100">
                        <span className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">{index + 1}</span>
                        <p className="text-lg text-gray-700">{step}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Perks Section with Large Icon Cards
const Perks = () => {
    const perks = [
        {
            title: "Professional Growth",
            description: "Access to event planning resources, community management training, and Google Developer events.",
            iconColor: "bg-blue-500",
        },
        {
            title: "Network Expansion",
            description: "Connect with developers, mentors, and industry experts globally to exchange knowledge.",
            iconColor: "bg-green-500",
        },
        {
            title: "Community Impact",
            description: "Lead a vibrant community, organizing events that inspire and educate local talent.",
            iconColor: "bg-red-500",
        },
    ];

    return (
        <div className="py-20 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Perks of Being an Organizer</h2>
            <div className="flex flex-wrap justify-center gap-8 px-6">
                {perks.map((perk, index) => (
                    <div key={index} className="bg-white w-80 p-8 rounded-lg shadow-xl flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-semibold ${perk.iconColor} mb-4`}>{perk.title[0]}</div>
                        <h3 className="text-2xl font-semibold text-gray-800 text-center">{perk.title}</h3>
                        <p className="mt-4 text-gray-600 text-center">{perk.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// FAQ Section with Accordion Style
const FAQ = () => {
    const faqs = [
        {
            question: "What qualifications do I need to become an organizer?",
            answer: "A technical background and community event experience are essential. A passion for sharing knowledge is also important.",
        },
        {
            question: "Is this a paid position?",
            answer: "The GDG Organizer role is voluntary, but organizers gain access to resources, networking, and exclusive events.",
        },
        {
            question: "How much time is expected from organizers?",
            answer: "Organizers are expected to host regular events and actively engage with the community. Time commitment may vary.",
        },
        {
            question: "Can I co-organize a chapter with someone else?",
            answer: "Yes, GDG chapters often have multiple organizers to share responsibilities and provide diverse skills to the community.",
        },
    ];

    return (
        <div className="py-20 bg-white">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main Page Component
const WhoCanApplyPage = () => {
    return (
        <div>
            <Header />
            <Requirements />
            <HowToApply />
            <Perks />
            <FAQ />
        </div>
    );
};

export default WhoCanApplyPage;
