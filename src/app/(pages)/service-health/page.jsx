"use client";
import React from 'react';

const services = [
    { name: "Access Approval", regions: ["Available", "", "Available", "", "", "Available", "Available"] },
    { name: "Access Context Manager", regions: ["Available", "Available", "Available", "Available", "Available", "Available", "Available"] },
    { name: "Agent Assist", regions: ["Available", "", "Available", "Service information", "", "", "One or more regions affected"] },
    // Add more services as needed
];

const ServiceHealthPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-6">
            {/* Header Section */}
            <header className="flex items-center justify-between p-4 border-b border-gray-300">
                <h1 className="text-3xl font-bold text-blue-700">Google Cloud</h1>
                <a href="#" className="text-blue-600 underline">Console</a>
            </header>

            <div className="p-6 bg-white shadow-md rounded-md mt-6">
                <h2 className="text-xl font-semibold">Service Health</h2>
                <p className="mt-2 text-gray-700">
                    This page provides status information on the services that are part of Google Cloud. Check back here to view the current status of the services listed below. If you are experiencing an issue not listed here, please <a href="#" className="text-blue-600 underline">contact Support</a>. Learn more about what's posted on the dashboard in this <a href="#" className="text-blue-600 underline">FAQ</a>.
                </p>
            </div>

            <div className="bg-blue-100 p-4 rounded-md mt-4 flex justify-between items-center">
                <div>
                    <p className="text-blue-900 font-medium">
                        See incidents that impact your workloads and resources
                    </p>
                    <p className="text-blue-700 text-sm">
                        Use Personalized Service Health for a more detailed overview of incidents affecting your Google Cloud projects, including custom alerts, API data, and logs. <a href="#" className="underline">Learn more</a>
                    </p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">Go to your account</button>
            </div>

            {/* Tabs Section */}
            <div className="flex space-x-4 mt-6 border-b border-gray-300">
                {["Overview", "Americas", "Europe", "Asia Pacific", "Middle East", "Africa", "Multi-regions"].map((tab, index) => (
                    <button key={index} className="px-4 py-2 text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600">
                        {tab}
                    </button>
                ))}
            </div>

            <div className="text-sm text-gray-700 mt-4">
                <p>
                    Check status by product and location. Click the other tabs to check the status for specific regions and multi-regions. <br />
                    <span className="font-semibold">Multi-regions:</span> Services in a multi-region location are managed by Google to be redundant and distributed across multiple regions in a large geographic area. <a href="#" className="text-blue-600 underline">Learn more</a><br />
                    <span className="font-semibold">Global:</span> status for a specific globally distributed service offered to the product. This status does not refer to all product service around the world, just the specific global service.
                </p>
            </div>

            {/* Status Indicators */}
            <div className="flex space-x-6 my-4 text-gray-700">
                <div className="flex items-center space-x-2">
                    <span className="bg-green-500 w-4 h-4 rounded-full inline-block"></span>
                    <span>Available</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="bg-yellow-500 w-4 h-4 rounded-full inline-block"></span>
                    <span>Service information</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="bg-red-500 w-4 h-4 rounded-full inline-block"></span>
                    <span>One or more regions affected</span>
                </div>
            </div>

            {/* Services Table */}
            <div className="overflow-auto mt-4">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="text-left bg-gray-100">
                            <th className="p-3 border-b border-gray-200">Products</th>
                            {["Americas", "Europe", "Asia Pacific", "Middle East", "Africa", "Multi-regions", "Global"].map((region, index) => (
                                <th key={index} className="p-3 border-b border-gray-200">{region} (regions)</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="p-3 border-b border-gray-200 font-medium text-gray-900">{service.name}</td>
                                {service.regions.map((status, idx) => (
                                    <td key={idx} className="p-3 border-b border-gray-200 text-center">
                                        {status === "Available" && <span className="text-green-500">✔️</span>}
                                        {status === "Service information" && <span className="text-yellow-500">⚠️</span>}
                                        {status === "One or more regions affected" && <span className="text-red-500">❗</span>}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceHealthPage;
