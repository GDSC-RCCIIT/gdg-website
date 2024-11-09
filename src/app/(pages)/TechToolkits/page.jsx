'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Cloud,
  Database,
  Terminal,
  Monitor,
  Settings,
  Server,
  Laptop,
  Box,
  Coffee,
  Globe,
  Tool
} from 'lucide-react';
import Link from 'next/link';

const TechToolkitHub = () => {
  const [selectedStack, setSelectedStack] = useState(null);

  const techStacks = [
    {
      id: 'mern',
      title: 'MERN Stack',
      icon: <Globe className="w-6 h-6" />,
      color: '#00796B',
      tools: [
        { name: 'MongoDB', level: 'Database', color: '#47A248' },
        { name: 'Express.js', level: 'Backend', color: '#000000' },
        { name: 'React', level: 'Frontend', color: '#61DAFB' },
        { name: 'Node.js', level: 'Runtime', color: '#339933' }
      ]
    },
    {
      id: 'mean',
      title: 'MEAN Stack',
      icon: <Globe className="w-6 h-6" />,
      color: '#1976D2',
      tools: [
        { name: 'MongoDB', level: 'Database', color: '#47A248' },
        { name: 'Express.js', level: 'Backend', color: '#000000' },
        { name: 'Angular', level: 'Frontend', color: '#DD0031' },
        { name: 'Node.js', level: 'Runtime', color: '#339933' }
      ]
    },
    {
      id: 'lamp',
      title: 'LAMP Stack',
      icon: <Server className="w-6 h-6" />,
      color: '#E65100',
      tools: [
        { name: 'Linux', level: 'OS', color: '#FCC624' },
        { name: 'Apache', level: 'Server', color: '#D22128' },
        { name: 'MySQL', level: 'Database', color: '#4479A1' },
        { name: 'PHP', level: 'Backend', color: '#777BB4' }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps Tools',
      icon: <Settings className="w-6 h-6" />,
      color: '#0277BD',
      tools: [
        { name: 'Docker', level: 'Containerization', color: '#2496ED' },
        { name: 'Kubernetes', level: 'Orchestration', color: '#326CE5' },
        { name: 'Jenkins', level: 'CI/CD', color: '#D24939' },
        { name: 'Terraform', level: 'IaC', color: '#7B42BC' },
        { name: 'Ansible', level: 'Configuration', color: '#EE0000' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Platforms',
      icon: <Cloud className="w-6 h-6" />,
      color: '#1565C0',
      tools: [
        { name: 'Google Cloud', level: 'Cloud', color: '#4285F4' },
        { name: 'AWS', level: 'Cloud', color: '#FF9900' },
        { name: 'Azure', level: 'Cloud', color: '#0078D4' },
        { name: 'Heroku', level: 'PaaS', color: '#430098' }
      ]
    },
    {
      id: 'editors',
      title: 'Code Editors & IDEs',
      icon: <Terminal className="w-6 h-6" />,
      color: '#424242',
      tools: [
        { name: 'VS Code', level: 'Editor', color: '#007ACC' },
        { name: 'IntelliJ IDEA', level: 'IDE', color: '#000000' },
        { name: 'Sublime Text', level: 'Editor', color: '#FF9800' },
        { name: 'PyCharm', level: 'IDE', color: '#21D789' }
      ]
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      color: '#673AB7',
      tools: [
        { name: 'Python', level: 'Backend', color: '#3776AB' },
        { name: 'JavaScript', level: 'Full-Stack', color: '#F7DF1E' },
        { name: 'Java', level: 'Backend', color: '#007396' },
        { name: 'Go', level: 'Backend', color: '#00ADD8' }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Tools',
      icon: <Monitor className="w-6 h-6" />,
      color: '#C2185B',
      tools: [
        { name: 'Webpack', level: 'Bundler', color: '#8DD6F9' },
        { name: 'Sass', level: 'CSS', color: '#CC6699' },
        { name: 'TypeScript', level: 'Language', color: '#3178C6' },
        { name: 'Tailwind', level: 'CSS', color: '#06B6D4' }
      ]
    }
  ];

  const stackVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Google Developer Student Club
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl md:mt-5 md:max-w-3xl">
              Tech Toolkit Hub
            </p>
            <div className="mt-5 max-w-md mx-auto flex justify-center md:mt-8">
              <motion.div
                className="rounded-md shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#explore" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10">
                  Explore Tools
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Stacks Grid */}
      <div id="explore" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={stackVariants}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedStack(stack.id === selectedStack ? null : stack.id)}
              style={{
                backgroundImage: `linear-gradient(135deg, ${stack.color}10, white)`,
              }}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div 
                    className="flex items-center justify-center h-12 w-12 rounded-lg text-white"
                    style={{ backgroundColor: stack.color }}
                  >
                    {stack.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {stack.title}
                  </h3>
                </div>
              </div>

              <AnimatePresence>
                {selectedStack === stack.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mt-6 space-y-4">
                      {stack.tools.map((tool) => (
                        <motion.div
                          key={tool.name}
                          className="flex items-center justify-between p-3 rounded-lg"
                          style={{ backgroundColor: `${tool.color}15` }}
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-sm font-medium text-gray-900">
                            {tool.name}
                          </span>
                          <span
                            className="px-3 py-1 text-xs rounded-full"
                            style={{ backgroundColor: tool.color + '30', color: tool.color }}
                          >
                            {tool.level}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Resources */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">Learning Resources</h2>
            <p className="mt-4 text-xl text-gray-600">
              Start your development journey with these curated resources
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Google Codelabs',
                description: 'Hands-on coding experiences',
                icon: <Terminal className="w-6 h-6" />,
                link: 'https://codelabs.developers.google.com'
              },
              {
                title: 'FreeCodeCamp',
                description: 'Learn to code for free',
                icon: <Code className="w-6 h-6" />,
                link: 'https://www.freecodecamp.org'
              },
              {
                title: 'MDN Web Docs',
                description: 'Comprehensive web documentation',
                icon: <Globe className="w-6 h-6" />,
                link: 'https://developer.mozilla.org'
              }
            ].map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white">
                  {resource.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  {resource.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Join Community Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white">Join Our Developer Community</h2>
            <p className="mt-4 text-xl text-blue-100">
              Connect with fellow developers, share knowledge, and grow together
            </p>
            <Link href='/SignUp'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 rounded-md bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
              Get Started Now
            </motion.button>
              </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechToolkitHub;