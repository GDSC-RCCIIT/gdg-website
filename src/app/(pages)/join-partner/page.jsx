"use client"
import React from 'react';

const PartnerPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-6">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row items-center justify-between bg-white p-6 shadow-md rounded-md">
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">Join Partner Advantage</h1>
                    <p className="text-gray-700 mb-4">
                        Partner with Google Cloud to transform your business. Access comprehensive training, valuable resources, and powerful tools to leverage the cloud for your business and customers. To join an existing account, <a href="#" className="text-blue-600 underline">register as a user</a>.
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Become a partner</button>
                        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md">Go to portal</button>
                    </div>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example link, replace with actual video URL
                            title="Google Cloud Partner Advantage"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="mt-2 text-center text-gray-700">Google Cloud partners solve for the biggest challenges</p>
                </div>
            </header>

            {/* Benefits Section */}
            <section className="text-center my-12">
                <h2 className="text-3xl font-bold mb-6">Bring the power of Google Cloud to your customers</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="bg-white shadow-lg p-4 w-64 rounded-md">
                        <h3 className="font-semibold text-lg">Sell</h3>
                        <p className="text-gray-700">Resell Google Cloud, Google Workspace, and Chrome directly or through a distributor.</p>
                    </div>
                    <div className="bg-white shadow-lg p-4 w-64 rounded-md">
                        <h3 className="font-semibold text-lg">Service</h3>
                        <p className="text-gray-700">Provide valued consulting and service delivery for Google Cloud, Google Workspace, or Chrome.</p>
                    </div>
                    <div className="bg-white shadow-lg p-4 w-64 rounded-md">
                        <h3 className="font-semibold text-lg">Build</h3>
                        <p className="text-gray-700">Build integrated solutions for Google Cloud or Google Workspace; sell through Cloud Marketplace.</p>
                    </div>
                </div>
            </section>

            {/* Growth Benefits Section */}
            <section className="my-12">
                <h2 className="text-3xl font-bold text-center mb-6">Benefits designed for growth</h2>
                <p className="text-center text-gray-700 mb-8">
                    Partner Advantage offers 3 types of participation, each with its own set of benefits to help you sell, service, and build with Google Cloud.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Member',
                            description: 'Access to standard benefits to grow your skills and help customers succeed.',
                            benefits: ['Discounted use of Google Workspace', 'Technical training courses', 'Events, webinars, hands-on labs'],
                        },
                        {
                            title: 'Partner',
                            description: 'Earn a Google Cloud Partner badge and gain access to more benefits.',
                            benefits: ['Partner discounts', 'Financial incentives', 'Partner badge', 'Partner Directory listing'],
                        },
                        {
                            title: 'Premier Partner',
                            description: 'Earn the Premier Partner badge and unlock the highest level of benefits.',
                            benefits: ['Premier Partner discounts', 'Financial incentives', 'Exclusive webinars and training'],
                        },
                    ].map((type, index) => (
                        <div key={index} className="bg-white p-6 shadow-md rounded-md">
                            <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                            <p className="text-gray-700 mb-4">{type.description}</p>
                            <h4 className="font-semibold text-gray-800">Benefit examples</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                                {type.benefits.map((benefit, idx) => (
                                    <li key={idx}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Badge Section */}
            <section className="my-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Stand out from the crowd</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: 'Google Cloud Partner badge',
                            description: 'Showcase your experience to clients and stand out in the industry.',
                            button: 'Browse Premier Partners',
                        },
                        {
                            title: 'Cloud Digital Leader badge',
                            description: 'Upskill your team and validate their knowledge of Google Cloud.',
                            button: 'Explore partner training',
                        },
                        {
                            title: 'Specialization badge',
                            description: 'Demonstrate customer success in specific areas with a specialization badge.',
                            button: 'Learn more',
                        },
                        {
                            title: 'Google Cloud Ready badge',
                            description: 'Validate your solutions that meet integration requirements.',
                            button: 'Learn more',
                        },
                    ].map((badge, index) => (
                        <div key={index} className="bg-white p-6 shadow-md rounded-md">
                            <h3 className="font-semibold text-lg mb-2">{badge.title}</h3>
                            <p className="text-gray-700 mb-4">{badge.description}</p>
                            <button className="text-blue-600 underline">{badge.button}</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Partner Success Stories */}
            <section className="my-12">
                <h2 className="text-3xl font-bold text-center mb-6">Partner success stories</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { title: 'Deloitte', type: 'Video', duration: '0:59' },
                        { title: 'VMware', type: 'Video', duration: '1:34' },
                        { title: 'Zeotap', type: 'Case study', duration: '3-min read' },
                    ].map((story, index) => (
                        <div key={index} className="bg-white p-4 w-64 shadow-md rounded-md text-center">
                            <h3 className="font-semibold text-lg">{story.title}</h3>
                            <p className="text-gray-700">{story.type}</p>
                            <p className="text-gray-500">{story.duration}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <footer className="bg-gray-50 text-center py-8">
                <h2 className="text-3xl font-bold mb-4">Take the next step</h2>
                <p className="text-gray-700 mb-4">Join Partner Advantage to transform your business with Google Cloud</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md">Become a partner</button>
                <p className="mt-4">
                    Already a partner? <a href="#" className="text-blue-600 underline">Log in</a> | Want to join your company’s account? <a href="#" className="text-blue-600 underline">Register as a user</a>
                </p>
            </footer>
        </div>
    );
};

export default PartnerPage;
