'use client';
import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import { hackathonProjects } from '../../../lib/Hackathon';
import { motion } from 'framer-motion';
import Link from 'next/link.js';

function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // Filter projects based on search query
  const filteredProjects = hackathonProjects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  const ProjectsSkeleton = () => (
    <div className="flex justify-center flex-wrap mt-8">
      <div className="text-center pt-10 mb-8">
        <div className="h-10 w-3/4 bg-gray-300 rounded-md mb-2" /> 
        <div className="h-6 w-2/3 bg-gray-300 rounded-md" /> 
      </div>

      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="w-full max-w-xs mx-2 mb-4 bg-gray-100 border border-gray-300 animate-pulse rounded-lg">
          <div className="h-32 bg-gray-300 rounded-t-lg" />

          <div className="p-4">
            <div className="h-6 w-3/4 bg-gray-300 rounded-md mb-2" />
            <div className="h-4 w-2/3 bg-gray-300 rounded-md mb-2" />
            <div className="h-4 w-1/2 bg-gray-300 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="flex flex-col mx-4">
        {/* Heading Section */}
        <div className="text-center pt-10">
          <motion.h1
            className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Girl Hackathon 2024
          </motion.h1>

          <motion.p
            className="text-gray-600 text-xl mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Girl Hackathon is a program for women students in computer science and allied courses across India.
          </motion.p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mt-8">
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-lg text-gray-800"
            placeholder="Search for hackathons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Cards Section */}
        {loading ? ( 
          <ProjectsSkeleton />
        ) : (
<div className="flex justify-center flex-wrap mt-8">
          {filteredProjects && filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link
                  href={{
                    pathname: `/Hackathon/${project.title}`,
                    query: {
                      description: project.description,
                      image: project.image,
                      link: project.link,
                    },
                  }}
                >
                <Card
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
                </Link>
              </motion.div>
            ))
          ) : (
            <p>No projects match your search</p>
          )}
        </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
