'use client'
import React, { useState } from 'react';
import Card from './Card.jsx';
import { hackathonProjects } from '../../../lib/Hackathon';
import { motion } from 'framer-motion';
import Link from 'next/link.js';

function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects based on search query
  const filteredProjects = hackathonProjects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
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
      </div>
    </div>
  );
}

export default ProjectsPage;
