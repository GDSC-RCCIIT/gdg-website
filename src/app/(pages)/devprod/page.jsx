"use client";
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import ProductNavbar from '../../../components/Global/ProductsNavbar';

// Header Section with Search Bar
const Header = ({ searchQuery, setSearchQuery }) => {
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);

    // Fetch products data from JSON server
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/devproducts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data || []);
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts([]);  // Optional: Set an empty array if fetching fails
            }
        };

        fetchProducts();
    }, []);

    // Filter and search products
    const filteredProducts = products.filter((product) => {
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        const matchesFocus = !selectedFocus || product.focus === selectedFocus;
        const matchesSearch =
            !searchQuery ||
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesFocus && matchesSearch;
    });

    return (
        <div>
            <ProductNavbar selectedTab={"All Products"} setSelectedTab={() => { }} />
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Filters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedFocus={selectedFocus}
                setSelectedFocus={setSelectedFocus}
            />
            <ProductGrid products={filteredProducts} />
        </div>
    );
};

export default DeveloperProductsPage;
