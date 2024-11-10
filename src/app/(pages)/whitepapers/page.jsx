"use client"
import React, { useState, useEffect } from 'react';

const WhitepapersPage = () => {
    const [whitepapers, setWhitepapers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        featured: false,
        ai: false,
        cloudBasics: false,
    });

    // Fetch whitepapers data
    useEffect(() => {
        const fetchWhitepapers = async () => {
            try {
                const response = await fetch('http://localhost:5000/whitepapers');
                const data = await response.json();
                setWhitepapers(data);
            } catch (error) {
                console.error("Error fetching whitepapers:", error);
            }
        };

        fetchWhitepapers();
    }, []);

    // Filter whitepapers based on search query and selected filters
    const filteredWhitepapers = whitepapers
        .map(section => ({
            ...section,
            items: section.items.filter(item => {
                const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchQuery.toLowerCase());

                const matchesFilters = (
                    (filters.featured && section.category === 'Featured Whitepapers') ||
                    (filters.ai && section.category === 'AI and ML') ||
                    (filters.cloudBasics && section.category === 'Cloud Basics') ||
                    !Object.values(filters).includes(true)
                );

                return matchesSearch && matchesFilters;
            })
        }))
        .filter(section => section.items.length > 0);  // Remove sections with no matching items

    // Handle filter change
    const handleFilterChange = (e) => {
        const { id, checked } = e.target;
        setFilters(prev => ({ ...prev, [id]: checked }));
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            {/* Header Section */}
            <header className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md rounded-lg">
                <div>
                    <h1 className="text-3xl font-bold">Google Cloud Whitepapers</h1>
                    <p className="mt-2">Written by Googlers, independent analysts, customers, and partners, these whitepapers explain the technology underlying our products and services or examine topics such as security, architecture, and data governance.</p>
                </div>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">Contact us</button>
            </header>

            {/* Sidebar and Content */}
            <div className="flex flex-wrap lg:flex-nowrap mt-8 gap-6">
                {/* Sidebar */}
                <aside className="w-full lg:w-1/4 bg-white p-4 shadow-md rounded-lg">
                    <h2 className="text-lg font-semibold mb-4">More from Google Cloud</h2>
                    <ul className="space-y-2 text-blue-600">
                        <li><a href="#" className="hover:underline">Analyst Reports</a></li>
                        <li><a href="#" className="hover:underline">Solutions</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                    </ul>
                    <h2 className="text-lg font-semibold mt-6 mb-4">Filter by</h2>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="featured" checked={filters.featured} onChange={handleFilterChange} className="w-4 h-4" />
                            <label htmlFor="featured" className="text-gray-700">Featured Whitepapers</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="ai" checked={filters.ai} onChange={handleFilterChange} className="w-4 h-4" />
                            <label htmlFor="ai" className="text-gray-700">AI and ML</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="cloudBasics" checked={filters.cloudBasics} onChange={handleFilterChange} className="w-4 h-4" />
                            <label htmlFor="cloudBasics" className="text-gray-700">Cloud Basics</label>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <section className="w-full lg:w-3/4">
                    <div className="flex items-center space-x-4 mb-6">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none"
                        />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">Search</button>
                    </div>

                    {filteredWhitepapers.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((item, idx) => (
                                    <div key={idx} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200">
                                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                        <p className="text-gray-700 mb-4">{item.description}</p>
                                        <button className="text-blue-600 underline font-semibold">Read more</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default WhitepapersPage;
