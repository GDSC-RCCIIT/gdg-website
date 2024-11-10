'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ProductsNavbar from '../../../components/Global/ProductsNavbar';

const GrowthMonetizationPage = () => {
    const [selectedTab, setSelectedTab] = useState("Growth and monetization");
    const [overviewProducts, setOverviewProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All'); // for filtering by category (AI, Mobile, Web, Cloud)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const overviewResponse = await fetch('http://localhost:5000/overviewProducts');
                const allResponse = await fetch('http://localhost:5000/allProducts');
                const overviewData = await overviewResponse.json();
                const allData = await allResponse.json();

                setOverviewProducts(overviewData);
                setAllProducts(allData);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProducts();
    }, []);

    // Search functionality for All Products
    const handleSearch = (products) => {
        if (!searchTerm) return products;
        return products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    // Filter functionality for All Products
    const handleFilter = (products) => {
        if (filter === 'All') return products;
        return products.filter((product) =>
            product.tags.includes(filter)  // Check if the product has the selected filter tag
        );
    };

    // Apply both search and filter to all products
    const filteredAllProducts = handleSearch(handleFilter(allProducts));

    return (
        <div className="bg-white text-black">
            <ProductsNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-8 py-12 text-center">
                <h1 className="text-6xl font-bold leading-tight">
                    Growth and monetization
                </h1>
                <p className="text-lg mt-4">
                    Access global audiences, drive engagement, track performance, and unlock new revenue streams through our marketplaces, growth, and monetization tools.
                </p>
            </div>

            {/* Product Overview Section */}
            <div className="max-w-7xl mx-auto px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {overviewProducts.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all text-center"
                        >
                            <img src={product.image} alt={product.title} className="w-20 h-20 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                            <p className="text-gray-600 text-lg">{product.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* All Products Section */}
            <div className="max-w-7xl mx-auto px-8 mt-16">
                <h2 className="text-4xl font-semibold mb-8">All Products</h2>
                <div className="flex flex-wrap justify-between items-center mb-12">
                    <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
                        <Search className="absolute top-3 left-3 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search for a product"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => setFilter('AI')}
                            className={`px-4 py-2 ${filter === 'AI' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded-full font-bold hover:bg-blue-600 transition-all`}
                        >
                            AI
                        </button>
                        <button
                            onClick={() => setFilter('Mobile')}
                            className={`px-4 py-2 ${filter === 'Mobile' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded-full font-bold hover:bg-blue-600 transition-all`}
                        >
                            Mobile
                        </button>
                        <button
                            onClick={() => setFilter('Web')}
                            className={`px-4 py-2 ${filter === 'Web' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded-full font-bold hover:bg-blue-600 transition-all`}
                        >
                            Web
                        </button>
                        <button
                            onClick={() => setFilter('Cloud')}
                            className={`px-4 py-2 ${filter === 'Cloud' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded-full font-bold hover:bg-blue-600 transition-all`}
                        >
                            Cloud
                        </button>
                        <button
                            onClick={() => setFilter('All')}
                            className={`px-4 py-2 ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded-full font-bold hover:bg-blue-600 transition-all`}
                        >
                            All
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredAllProducts.length === 0 ? (
                        <div className="col-span-full text-center text-xl text-gray-600 py-12">
                            No matched products
                        </div>
                    ) : ( filteredAllProducts.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                        >
                            <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
                            <a href="#" className="text-blue-500 font-bold">Explore</a>
                        </motion.div>
                    )))}
                </div>
            </div>
        </div>
    );
};

export default GrowthMonetizationPage;
