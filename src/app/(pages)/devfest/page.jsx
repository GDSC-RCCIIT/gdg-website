"use client"
import React from 'react';
import { Search, Video, Users, Award } from 'lucide-react';

// DevFest Page Component
const DevFestPage = () => {
    return (
        <div className="bg-gradient-to-br from-white to-gray-100">
            {/* Hero Section */}
            <div className="relative h-[600px] flex items-center justify-center text-center border-b border-gray-400 bg-gradient-to-r from-green-600 via-blue-500 to-purple-700">
                <div className="absolute inset-0 opacity-20">
                    <div className="w-[400px] h-[400px] bg-purple-400 rounded-full blur-[150px] opacity-70 absolute top-10 left-20"></div>
                    <div className="w-[300px] h-[300px] bg-pink-400 rounded-full blur-[120px] opacity-60 absolute bottom-10 right-20"></div>
                </div>
                <div className="relative z-10 max-w-4xl px-8 text-white">
                    <h1 className="text-6xl font-extrabold leading-tight drop-shadow-lg">
                        Join us for DevFest 2024
                    </h1>
                    <p className="mt-8 text-lg drop-shadow-md">
                        DevFest 2024 is here, and this year's focus on Responsible AI couldn't be more timely. Join us as we explore the importance of developing technologies that enhance productivity without causing harm. Let's shape a future where AI serves humanity responsibly.
                    </p>
                    <a
                        href="#find-devfest"
                        className="inline-block mt-10 px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-500 transition-all ease-in-out duration-300"
                    >
                        Find a DevFest Near You
                    </a>
                </div>
            </div>

            {/* What to Expect Section */}
            <div className="mt-20 max-w-7xl mx-auto px-8">
                <h2 className="text-5xl font-semibold text-center text-gray-800 mb-16">What to Expect at a DevFest</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="bg-white p-10 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:border-blue-500 border-4 border-transparent">
                        <h3 className="text-3xl font-bold text-green-700 mb-6">Technical Content</h3>
                        <p className="text-lg text-gray-600">
                            Worldwide events hosted by the Google Developer Groups community, featuring Googlers and Google Developer Experts.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:border-blue-500 border-4 border-transparent">
                        <h3 className="text-3xl font-bold text-green-700 mb-6">Workshops</h3>
                        <p className="text-lg text-gray-600">
                            Full-day workshops, hands-on experiences, hacking and debugging events, all centered on your favorite Google technologies.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:border-blue-500 border-4 border-transparent">
                        <h3 className="text-3xl font-bold text-green-700 mb-6">Networking</h3>
                        <p className="text-lg text-gray-600">
                            Panel discussions, Q&A sessions, meetup groups, project showcases, coding workshops, mentorship sessions, and more.
                        </p>
                    </div>
                </div>
            </div>

            {/* Videos Section */}
            <div className="mt-32 max-w-7xl mx-auto px-8">
                <h2 className="text-5xl font-semibold text-center text-gray-800 mb-16">Watch Videos from DevFest 2023</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {videos.map((video, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:border-green-600 border-4 border-transparent">
                            <div className="flex items-center mb-4">
                                <Video className="w-6 h-6 text-blue-500 mr-3" />
                                <span className="font-semibold text-lg text-gray-700">{video.date}</span>
                            </div>
                            <h3 className="text-3xl font-semibold text-gray-900 mb-4">{video.title}</h3>
                            <p className="text-lg text-gray-600 mb-4">{video.description}</p>
                            <div className="flex items-center space-x-4">
                                {video.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="text-sm bg-blue-200 text-blue-900 px-3 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="mt-32 py-16 bg-gradient-to-r from-purple-700 to-indigo-900 text-white">
                <h2 className="text-5xl font-semibold text-center mb-16">What People Are Saying About DevFest</h2>
                <div className="flex flex-wrap justify-center gap-12">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white text-gray-900 p-10 rounded-xl max-w-md shadow-2xl transition-transform transform hover:scale-105">
                            <div className="mb-4 text-yellow-500">
                                <Award className="w-8 h-8" />
                            </div>
                            <p className="text-lg mb-4">"{testimonial.quote}"</p>
                            <p className="font-semibold text-lg">{testimonial.name}, <span className="text-sm text-gray-500">{testimonial.title}</span></p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Statistics Section */}
            <div className="mt-32 max-w-7xl mx-auto px-8 text-center">
                <h2 className="text-5xl font-semibold text-gray-800 mb-16">DevFest 2023 Highlights</h2>
                <div className="flex flex-wrap justify-center gap-16">
                    <div className="flex flex-col items-center">
                        <span className="text-7xl font-extrabold text-blue-600">650K+</span>
                        <span className="text-2xl font-semibold text-gray-600">Devs Reached</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-7xl font-extrabold text-blue-600">670+</span>
                        <span className="text-2xl font-semibold text-gray-600">Events Worldwide</span>
                    </div>
                </div>
            </div>

            {/* Get Started Section */}
            <div className="mt-32 max-w-7xl mx-auto px-8 py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl shadow-xl text-center">
                <h2 className="text-5xl font-bold mb-16">Learn, Explore, Connect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {resources.map((resource, index) => (
                        <div key={index} className="bg-white p-8 text-gray-800 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-3xl font-semibold mb-4">{resource.title}</h3>
                            <p className="text-lg mb-4">{resource.description}</p>
                            <a href="#" className="text-blue-600 font-bold">Get Started <span className="ml-2">→</span></a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const videos = [
    { title: "Prototyping apps with Project IDX, Firebase extensions and the PaLM API", date: "November 2023", description: "Ali Satter and Vikas Anand discuss Generative AI and LLMs, and how you can use Project IDX to create apps.", tags: ["Firebase", "AI"] },
    { title: "The LLM Landscape", date: "October 2023", description: "Mark Ryan gives an overview of the LLM landscape, major developments, and upcoming changes.", tags: ["AI", "Cloud"] },
    { title: "MLOps x Generative AI best practices", date: "October 2023", description: "Divya Jain explains why MLOps is important, its limitations, and best practices for Generative AI.", tags: ["AI", "MLOps"] }
];

const testimonials = [
    { quote: "DevFest is a fantastic opportunity to meet some amazing developers and find out the latest news about how to use Google technologies.", name: "Barry Pollard", title: "Web Performance Developer Advocate" },
    { quote: "Some awesome new features were launched for building solutions on the Google Workspace Platform. DevFest is a fantastic opportunity to learn all about them!", name: "Chanel Greco", title: "Google Workspace Developer Advocate" },
    { quote: "DevFest is an amazing way to learn about the best developer tools that Google has to offer. It is also a great way to connect and network with fellow professionals.", name: "Prakhar Srivastav", title: "Software Engineer" },
];

const resources = [
    { title: "Mobile", description: "Develop for a range of audiences and form factors." },
    { title: "Web", description: "Create fast, secure sites and apps for the open web." },
    { title: "AI", description: "Bring the power of machine learning to apps and workflows." },
    { title: "Cloud", description: "Simplify and scale end-to-end development." }
];

export default DevFestPage;