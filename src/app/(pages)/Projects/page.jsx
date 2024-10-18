import React from 'react';
import Card from './Card.jsx';
import { projectData } from '../../../lib/Projects';

function ProjectsPage() {
  return (
    <div>
      <div className="flex flex-col mx-4">
        <div className="text-center pt-10">
          {/* Gradient text for heading */}
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Our Projects
          </h1>

          {/* Subheading with adjusted spacing */}
          <p className="text-gray-600 text-xl mt-4 max-w-3xl mx-auto">
            Explore our latest projects and get involved by contributing to open source on GitHub!
          </p>
        </div>


        <div className="flex justify-center flex-wrap mt-8">
          {projectData && projectData.length > 0 ? (
            projectData.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
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
