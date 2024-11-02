'use client'
import AddEventForm from "@/components/Global/AddEventForm";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa"; // Import icons

const AddEventSkeleton = () => (
  <div className="relative h-[600px] bg-gray-100 overflow-hidden border border-gray-300 animate-pulse">
    <div className="absolute inset-0 grid grid-cols-12 gap-4 bg-[length:60px_60px] bg-gray-200" />

    {/* Skeleton floating circles */}
    <div className="absolute top-[-35px] left-[300px] h-36 w-36 bg-gray-300 rounded-full animate-pulse" />
    <div className="absolute top-[50px] right-[50px] h-[400px] w-[400px] bg-gray-300 rounded-full animate-pulse" />
    <div className="absolute bottom-10 right-[500px] h-28 w-28 bg-gray-300 rounded-full animate-pulse" />
    <div className="absolute bottom-[-60px] left-8 h-[200px] w-[200px] bg-gray-300 rounded-full animate-pulse" />

    {/* Skeleton for text content */}
    <div className="relative z-10 flex flex-col items-start justify-center h-full pl-12 text-left space-y-4">
      <div className="h-10 w-3/4 bg-gray-300 rounded-md" />
      <div className="h-10 w-2/3 bg-gray-300 rounded-md mt-2" />
      <div className="h-5 w-1/2 bg-gray-300 rounded-md mt-4" />
      <div className="h-5 w-1/2 bg-gray-300 rounded-md mt-2" />
      
      {/* Skeleton for buttons */}
      <div className="flex space-x-4 mt-8">
        <div className="h-10 w-24 bg-gray-300 rounded-md" />
        <div className="h-10 w-24 bg-gray-300 rounded-md" />
      </div>
    </div>
  </div>
);

const AddEvent = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState([{ title: '', date: '', description: '' }]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (index, e) => {
    const newFormData = [...formData];
    newFormData[index][e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    for (const data of formData) {
      if (!data.title || !data.date || !data.description) {
        setError('Please fill out all fields for each event.');
        return;
      }
    }

    setError('');
    setIsSubmitting(true);
    setSuccess('');

    // Simulate a form submission
    setTimeout(() => {
      console.log('Events submitted:', formData);
      setIsSubmitting(false);
      setFormData([{ title: '', date: '', description: '' }]); // Reset form
      setSuccess('Events submitted successfully!'); // Success message
    }, 1000);
  };

  const addEventField = () => {
    setFormData([...formData, { title: '', date: '', description: '' }]);
  };

  const removeEventField = (index) => {
    const newFormData = formData.filter((_, i) => i !== index);
    setFormData(newFormData);
  };

  if (loading) {
    return <AddEventSkeleton />;
  }

  return (
    <div className="relative h-[1700px] bg-white flex justify-center items-center overflow-hidden border border-gray-300">
      <motion.div
        className="absolute inset-0 grid grid-cols-12 gap-4 bg-[length:60px_60px]"
        style={{
          backgroundImage: `linear-gradient(270deg, hsla(0, 0%, 100%, 0) 25%, hsla(0, 0%, 100%, 0) 25.1%),
          linear-gradient(to right, #e2e8f0 0.5px, transparent 3.1px),
          linear-gradient(to bottom, #e2e8f0 1px, transparent 1px),
          linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 70%)`
        }}
      >
        {/* Floating Circles with subtle scaling and hovering animation */}
        {/* ... (Floating Circles Code here) ... */}
      </motion.div>

      {/* Centered White Box */}
      <div className="relative z-10 bg-white -mt-60 -mb-24 rounded-lg shadow-lg p-12 w-[1200px] h-[1300px] flex flex-col">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="text-center">
            <motion.h1
              className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Events Form
            </motion.h1>

            <motion.p
              className="text-gray-600 text-xl mt-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Add new events to help our community grow!
            </motion.p>
          </div>

          {/* Input Fields */}
          {formData.map((data, index) => (
            <div key={index} className="flex flex-col space-y-4 mt-8">
              <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={data.title}
                onChange={(e) => handleChange(index, e)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-200"
                required
              />
              <input
                type="date"
                name="date"
                value={data.date}
                onChange={(e) => handleChange(index, e)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-200"
                required
              />
              <textarea
                name="description"
                placeholder="Event Description"
                value={data.description}
                onChange={(e) => handleChange(index, e)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-200"
                rows="4"
                required
              />
              {formData.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeEventField(index)}
                  className="flex items-center text-red-600 hover:text-red-800 transition duration-200"
                >
                  <FaTrash className="mr-1" />
                  Remove Event
                </button>
              )}
            </div>
          ))}

          {/* Add Event Button */}
          <button
            type="button"
            onClick={addEventField}
            className="flex items-center text-blue-500 hover:text-blue-700 transition duration-200"
          >
            <FaPlus className="mr-1" />
            Add Another Event
          </button>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && <p className="text-green-500 text-center mt-4">{success}</p>}

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="mt-8 bg-blue-500 text-white rounded-md p-3 transition-all duration-200 hover:bg-blue-600 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Events'}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
