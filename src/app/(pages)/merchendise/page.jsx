"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Sample data for merchandise items
const merchandiseItems = [
    {
        id: 1,
        name: "GDG T-Shirt",
        description: "High-quality cotton T-shirt with GDG logo.",
        price: "$20.00",
        image: "/t-shirt1.jpeg", // Replace with actual image URL
    },
    {
        id: 2,
        name: "GDG T-Shirt",
        description: "High-quality cotton T-shirt with GDG logo.",
        price: "$20.00",
        image: "/t-shirt2.jpeg", // Replace with actual image URL
    },
    {
        id: 3,
        name: "GDG T-Shirt",
        description: "High-quality cotton T-shirt with GDG logo.",
        price: "$20.00",
        image: "/t-shirt3.jpeg", // Replace with actual image URL
    },
    {
        id: 4,
        name: "GDG T-Shirt",
        description: "High-quality cotton T-shirt with GDG logo.",
        price: "$20.00",
        image: "/t-shirt4.jpeg", // Replace with actual image URL
    },
    {
        id: 5,
        name: "GDG T-Shirt",
        description: "High-quality cotton T-shirt with GDG logo.",
        price: "$20.00",
        image: "/t-shirt5.jpeg", // Replace with actual image URL
    },
    {
        id: 6,
        name: "GDG T-Shirt",
        description: "High-quality cotton T-shirt with GDG logo.",
        price: "$20.00",
        image: "/t-shirt6.jpeg", // Replace with actual image URL
    },
    {
        id: 7,
        name: "GDG T-Shirt",
        description: "High-quality cotton T-shirt with GDG logo.",
        price: "$20.00",
        image: "/t-shirt7.jpeg", // Replace with actual image URL
    },
    {
        id: 8,
        name: "GDG T-Shirt",
        description: "High-quality cotton T-shirt with GDG logo.",
        price: "$20.00",
        image: "/t-shirt8.jpeg", // Replace with actual image URL
    },
    {
        id: 9,
        name: "GDG T-Shirt",
        description: "High-quality cotton T-shirt with GDG logo.",
        price: "$20.00",
        image: "/t-shirt9.jpeg", // Replace with actual image URL
    },


];

// Header Section
const MerchandiseHeader = () => {
    return (
        <motion.div
            className="relative bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500 text-white py-24 px-6 text-center overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative z-10 max-w-3xl mx-auto mt-8">
                <motion.h1 className="text-5xl font-bold mb-4">
                    GDG Merchandise Store
                </motion.h1>
                <p className="text-xl font-medium">
                    Explore exclusive GDG-branded items! Show your community pride with T-shirts, hoodies, mugs, and more.
                </p>
            </div>
        </motion.div>
    );
};

// Product Catalog Section
const ProductCatalog = ({ items, onAddToCart }) => {
    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Merchandise Catalog</h2>
            <div className="max-w-6xl mx-auto text-left px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                    >
                        <Image src={item.image} alt={item.name} width={200} height={200} className="mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-lg text-gray-700 mb-4">{item.description}</p>
                        <p className="text-xl font-bold text-gray-900 mb-4">{item.price}</p>
                        <button
                            onClick={() => onAddToCart(item)}
                            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

// Cart Modal Section
const CartModal = ({ cartItems, onClose, onRemoveFromCart, onCheckout }) => {
    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0);

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <motion.div
                className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700 absolute top-4 right-4">Close</button>
                <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p className="text-lg text-gray-700">Your cart is empty.</p>
                ) : (
                    <div>
                        <ul className="mb-6">
                            {cartItems.map((item, index) => (
                                <li key={index} className="flex justify-between items-center mb-4">
                                    <span className="text-lg">{item.name}</span>
                                    <span className="text-lg font-bold">{item.price}</span>
                                    <button onClick={() => onRemoveFromCart(item)} className="text-red-500 hover:text-red-700">Remove</button>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-xl font-bold">Total:</span>
                            <span className="text-xl font-bold">${total.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={onCheckout}
                            className="bg-green-500 text-white py-2 px-6 rounded-lg w-full hover:bg-green-600 transition duration-200"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

// Main GDG Merchandise Store Page Component
const GDGMerchandiseStorePage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
        setIsCartOpen(true);
    };

    const handleRemoveFromCart = (item) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    };

    const handleCheckout = () => {
        // Placeholder for checkout functionality
        alert("Proceeding to checkout...");
        setCartItems([]);
        setIsCartOpen(false);
    };

    return (
        <div>
            <MerchandiseHeader />
            <ProductCatalog items={merchandiseItems} onAddToCart={handleAddToCart} />
            {isCartOpen && (
                <CartModal
                    cartItems={cartItems}
                    onClose={() => setIsCartOpen(false)}
                    onRemoveFromCart={handleRemoveFromCart}
                    onCheckout={handleCheckout}
                />
            )}
        </div>
    );
};

export default GDGMerchandiseStorePage;
