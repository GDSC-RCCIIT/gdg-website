"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import { projectData } from "../../../lib/Projects";
import { motion } from "framer-motion";
import axios from "axios";

function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const filteredProjects = projectData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => {
        setAllProjects(response.data);
        setLoading(false);
        console.log("allProjects", allProjects);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const ProjectsSkeleton = () => (
    <div className="flex justify-center flex-wrap mt-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="w-full max-w-xs mx-2 mb-4 bg-gray-100 border border-gray-300 animate-pulse rounded-lg"
        >
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
            Explore our latest projects and get involved by contributing to open
            source on GitHub!
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

        {loading ? (
          <ProjectsSkeleton />
        ) : (
          <div className="flex justify-center flex-wrap my-8">
            {allProjects && allProjects.length > 0 ? (
              allProjects.map((project, index) => (
                <motion.div
                  key={project.projectTitle}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    id={project.id}
                    title={project.projectTitle}
                    description={project.projectOverview}
                    image="/Img1.jpg"
                    link={project.youtubeLink}
                  />
                </motion.div>
              ))
            ) : (
              <p>No projects available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
