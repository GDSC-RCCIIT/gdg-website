'use client'
import React, { useState } from 'react';
import Card from './Card.jsx';
import { projectData } from '../../../lib/Projects';
import { motion } from 'framer-motion';

function ProjectsPage() {
  // State to handle the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to filter projects based on the search query
  const filteredProjects = projectData.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col mx-4">
        <div className="text-center pt-10">
          <motion.h1
            className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Projects
          </motion.h1>

          <motion.p
            className="text-gray-600 text-xl mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our latest projects and get involved by contributing to open source on GitHub!
          </motion.p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <input
            type="text"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Search projects by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Projects List */}
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
                <Card
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              </motion.div>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
