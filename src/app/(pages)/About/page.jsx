"use client";
import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, MapPin, Book, Users, LucideBrainCircuit } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { FaAndroid, FaGlobe, FaRobot } from 'react-icons/fa';
import {GrCloudComputer} from 'react-icons/gr'

const GoogleColors = {
  blue: "#4285F4",
  red: "#DB4437",
  yellow: "#F4B400",
  green: "#0F9D58"
};

const TechStack = [
  { name: "Android Development", color: GoogleColors.green, icon: FaAndroid },
  { name: "Cloud Computing", color: GoogleColors.blue, icon: GrCloudComputer },
  { name: "Machine Learning", color: GoogleColors.red, icon: LucideBrainCircuit },
  { name: "Web Technologies", color: GoogleColors.yellow, icon: FaGlobe }
];

const GoogleDot = ({ color, delay = 0, size = "w-4 h-4" }) => (
  <motion.div
    className={`${size} rounded-full ${color}`}
    initial={{ y: 0 }}
    animate={{ y: [0, -8, 0] }}
    transition={{
      delay,
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const ParallaxSection = ({ children, yOffset = 0 }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, yOffset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default function About() {
  const [email, setEmail] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Please enter a valid email address!");
      return;
    }
    alert("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 transform-origin-0"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 100% 100%, #4285f4 0%, transparent 50%)",
                "radial-gradient(circle at 0% 100%, #34a853 0%, transparent 50%)",
                "radial-gradient(circle at 100% 0%, #ea4335 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, #fbbc05 0%, transparent 50%)",
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ opacity: 0.1 }}
          />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16 relative">
          <div className="flex justify-center space-x-3 mb-8">
            <GoogleDot color="bg-blue-500" delay={0} />
            <GoogleDot color="bg-red-500" delay={0.2} />
            <GoogleDot color="bg-yellow-500" delay={0.4} />
            <GoogleDot color="bg-green-500" delay={0.6} />
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">D</span>
              <span className="text-yellow-500">S</span>
              <span className="text-green-500">C</span>
              <span className="ml-2">RCIIT</span>
            </h1>
            <p className="text-xl text-black">
              Empowering students to grow as developers, innovators, and leaders in technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <ParallaxSection yOffset={50}>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Our Focus Areas
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TechStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg p-6 relative overflow-hidden"
                >
                  <div 
                    className="h-1 absolute top-0 left-0 right-0"
                    style={{ backgroundColor: tech.color }} 
                  />
                  <tech.icon 
                    size={32} 
                    className="mb-4"
                    style={{ color: tech.color }} 
                  />
                  <h3 className="text-xl font-semibold mb-4" style={{ color: tech.color }}>
                    {tech.name}
                  </h3>
                  <p className="text-black">
                    Learn, build, and grow with our community of developers passionate about {tech.name}.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Community Section */}
      <ParallaxSection yOffset={-50}>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold">Join Our Community</h2>
              <p className="mt-4 text-xl text-black">
                Connect with fellow developers, attend workshops, and participate in exciting projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Learn Together",
                  description: "Access resources, tutorials, and mentorship from experienced developers",
                  color: GoogleColors.blue,
                  icon: Book
                },
                {
                  title: "Build Projects",
                  description: "Work on real-world projects and build your portfolio",
                  color: GoogleColors.red,
                  icon: Github
                },
                {
                  title: "Grow Skills",
                  description: "Develop technical and soft skills through workshops and events",
                  color: GoogleColors.green,
                  icon: Users
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg p-8 text-center"
                >
                  <item.icon 
                    size={32} 
                    className="mx-auto mb-4"
                    style={{ color: item.color }} 
                  />
                  <h3 className="text-xl font-semibold mb-4" style={{ color: item.color }}>
                    {item.title}
                  </h3>
                  <p className="text-black">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Newsletter Section */}
      <ParallaxSection yOffset={30}>
        <section className="py-24 bg-white text-black">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-8">Stay Updated</h2>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg bg-white px-4 py-3 text-black border-2 focus:border-blue-500 focus:ring-blue-500"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>
    </div>
  );
}