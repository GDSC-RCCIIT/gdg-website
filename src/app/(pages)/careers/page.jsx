"use client"
import React, { useEffect, useState } from 'react';
import spotlightJobs from './opportunities';
import Link from 'next/link';
import axios from 'axios';
// Hero Component
const Hero = () => {

  return (
    <div className="relative h-[600px] bg-white overflow-hidden border border-gray-200">
      {/* Background Grid and Decorative Elements */}
      <div
        className="absolute inset-0 grid grid-cols-12 gap-4 bg-[length:60px_60px]"
        style={{
          backgroundImage: `
            linear-gradient(270deg, hsla(0, 0%, 100%, 0) 25%, hsla(0, 0%, 100%, 0) 25.1%),
            linear-gradient(to right, #e2e8f0 0.5px, transparent 3.1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 70%)`
        }}
      >
        <div className="absolute top-[-20px] left-[200px] h-36 w-36 bg-indigo-500 rounded-full"></div>
        <div className="absolute top-[60px] right-[80px] h-[300px] w-[300px] bg-blue-700 rounded-full"></div>
        <div className="absolute bottom-10 right-[400px] h-28 w-28 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-[-40px] left-8 h-[180px] w-[180px] bg-green-400 rounded-full"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full pl-12 text-left">
        <h1 className="text-5xl font-bold text-gray-800">
          Find Your Next Career Opportunity
        </h1>
        <h1 className="text-5xl font-bold text-gray-800 mt-4">
          Join a Team That Innovates.
        </h1>
        <p className="mt-4 max-w-lg text-lg text-gray-600">
          Explore exciting career opportunities at Our Company. Whether you're passionate about technology, sales, or design, there's a place for you in our team.
        </p>
        <div className="mt-8 space-x-4">
          <a
            href="#"
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Explore Jobs
          </a>
          <a
            href="#"
            className="inline-block px-6 py-3 text-gray-800 border-2 border-gray-300 rounded-md hover:bg-gray-50 bg-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

// Spotlight Component
// Spotlight Component
const Spotlight = () => {
  const [jobs, setJobs] = useState([]);
  console.log("jobs", jobs);

  useEffect(() => {
    axios
      .get("http://localhost:5000/careers")
      .then((response) => {
      setJobs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (
    <div className="mt-16 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-6">Spotlight</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {jobs.map((job) => (
          <Link key={job.id} href={`/careers/${job.id}`} className="bg-white shadow-lg rounded-lg p-6 w-72 transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src={job.image} alt={job.title} className="rounded-t-lg w-full h-40 object-cover mb-4" />
            <h3 className="font-bold text-xl text-blue-600">{job.title}</h3>
            <p className="mt-1 text-gray-500">{job.company}</p>
            <p className="mt-2 text-gray-600 text-sm">{job.description}</p>

            {/* Enhanced Location Section */}
            {/* {job.location && (
              <div className="mt-2 flex items-center space-x-2 text-gray-700">
                <span className="material-icons">location_on</span>
                <span className="font-semibold">{job.location}</span>
              </div>
            )} */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-400 text-sm">View Details</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


// Path to Success Section (New)
const PathToSuccess = () => {
  return (
    <section className="py-12 px-6 md:px-16 ml-40 mr-40">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Your Path to Career Success</h2>
      
      {/* Vision */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <img
          src="/vision.webp"
          alt="Vision"
          className="w-full md:w-1/2 h-64 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2">
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">🌟 Career Vision</h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our career vision is to create an inclusive environment where every team member has the opportunity to grow, innovate, and make a meaningful impact. We believe in nurturing talent and offering opportunities that drive both personal and professional growth, leading to long-term success in your career journey.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-16">
        <img
          src="/mission.webp"
          alt="Mission"
          className="w-full md:w-1/2 h-64 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="md:mr-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2">
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">🎯 Career Mission</h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our mission is to empower individuals by providing them with the tools, mentorship, and environment needed to innovate and excel. We strive to foster a culture of collaboration, diversity, and creativity, ensuring that every individual feels supported in their pursuit of excellence.
          </p>
        </div>
      </div>

      {/* Goal */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <img
          src="/goal.webp"
          alt="Goal"
          className="w-full md:w-1/2 h-64 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2">
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">🚀 Career Goal</h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our goal is to provide a platform for our employees to achieve both their personal and professional aspirations. We aim to be a workplace where passion meets purpose, where every challenge is an opportunity to learn, and where the future is shaped by the talent we cultivate.
          </p>
        </div>
      </div>
    </section>
  );
};


// CareerPage Component
const CareerPage = () => {
  return (
    <div>
      <Hero />
      <Spotlight />
      <PathToSuccess />
    </div>
  );
};

export default CareerPage;
