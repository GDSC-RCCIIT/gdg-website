"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const WorkshopNotification = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    setIsOpen(false);
    router.push('/');  // Navigate to the homepage
  };

  const handleRegister = () => {
    router.push('/SignIn');  // Navigate to the Sign-in page
  };

  if (!isOpen) return null; // If modal is closed, don't render it

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-20">
      <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl relative">
        {/* Close Button */}
        <button 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition-colors" 
          onClick={() => setIsOpen(false)}
        >
          <AiOutlineClose size={24} />
        </button>

        <div className="flex flex-col items-center text-center space-y-4">
          {/* Circle with Greater and Less Than Icons */}
          <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
            <FaLessThan className="text-blue-600 " />
            <FaGreaterThan className="text-blue-600" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900">🚀 Exclusive Google Workshop Invitation</h3>
          <p className="text-gray-600">Level up your skills! Don’t miss this opportunity to learn directly from industry experts. Seats are limited, act fast!</p>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            {/* Marketing Strategy for Register Button */}
            <button 
              className="w-full px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded hover:bg-blue-800 shadow-lg transform hover:scale-105 transition-transform"
              onClick={handleRegister}
            >
              🚀 Take Me There!   
            </button>
            
            <button 
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors"
              onClick={handleClose}
            >
              No, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopNotification;
