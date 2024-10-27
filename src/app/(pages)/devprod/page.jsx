"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';

// Header Section with Search Bar
const Header = () => {
    return (
        <div className="relative bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#EA4335] text-white py-20 px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Developer Products</h1>
            <p className="text-lg font-light mb-8 max-w-lg mx-auto">
                Discover powerful tools and platforms designed to accelerate your development journey with Google.
            </p>
            <div className="mt-6 max-w-lg mx-auto flex items-center bg-white rounded-full overflow-hidden shadow-lg">
                <input
                    type="text"
                    placeholder="Search for a product..."
                    className="flex-grow py-3 px-4 text-gray-800 focus:outline-none"
                />
                <button className="bg-[#4285F4] text-white px-6 py-3 hover:bg-[#357ae8] transition">
                    <Search className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

// Filter Section with Category and Development Focus Buttons
const Filters = ({ selectedCategory, setSelectedCategory, selectedFocus, setSelectedFocus }) => {
    const categories = ["Platforms", "Frameworks", "Services", "Growth"];
    const focusAreas = ["AI", "Mobile", "Web", "Cloud"];

    return (
        <div className="py-8 bg-gray-50 border-t border-b">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4 px-6">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Product Category</h3>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === category
                                    ? "bg-[#34A853] text-white"
                                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Development Focus</h3>
                    <div className="flex flex-wrap gap-2">
                        {focusAreas.map((focus, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedFocus(focus)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedFocus === focus
                                    ? "bg-[#EA4335] text-white"
                                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                    }`}
                            >
                                {focus}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Product Card Component with Classy Hover Effect
const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 w-80 hover:bg-gray-50 transition-all">
            <img
                src={product.image}
                alt={product.title}
                className="rounded-lg w-full h-40 object-cover mb-4 border border-gray-200"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <a
                href={product.link}
                className="inline-block px-4 py-2 rounded-full bg-[#FABB05] text-gray-900 font-semibold hover:bg-[#F4B400] transition"
            >
                Explore
            </a>
        </div>
    );
};

// Product Grid Section
const ProductGrid = ({ products }) => {
    return (
        <div className="py-16 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Products</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

// Main Developer Products Page Component
const DeveloperProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedFocus, setSelectedFocus] = useState(null);

    const products = [
        {
            title: "Android",
            description: "Modern tools to help you build experiences that people love across every Android device.",
            image: "/devprod1.jpeg",
            link: "#",
        },
        {
            title: "Google Cloud",
            description: "New customers get $300 in free credits to deploy dynamic websites and launch VMs.",
            image: "/devprod2.png",
            link: "#",
        },
        {
            title: "Google AI Studio",
            description: "Build generative AI applications quickly with Gemini in Google AI Studio.",
            image: "/devprod3.jpeg",
            link: "#",
        },
        {
            title: "ChromeOS",
            description: "Modern tools and features to help you build high-quality web experiences.",
            image: "/devprod4.png",
            link: "#",
        },
        {
            title: "Android Studio",
            description: "An integrated development environment (IDE) optimized for Android apps.",
            image: "/devprod5.jpeg",
            link: "#",
        },
        {
            title: "Firebase Cloud Messaging",
            description: "A cross-platform messaging solution to reliably send messages at no cost.",
            image: "/devprod6.jpeg",
            link: "#",
        },
    ];

    return (
        <div>
            <Header />
            <Filters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedFocus={selectedFocus}
                setSelectedFocus={setSelectedFocus}
            />
            <ProductGrid products={products} />
        </div>
    );
};

export default DeveloperProductsPage;
