"use client";
import React from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, Instagram, Twitter, Linkedin, MapPin, Book, Users, Phone } from 'lucide-react';

// Google Dot component with wavy animation effect
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
<<<<<<< HEAD
      <div className="relative h-[600px] md:h-[500px] lg:h-[600px] bg-white overflow-hidden border border-gray-300">
          <motion.div
              className="absolute inset-0 grid grid-cols-12 gap-4 bg-[length:60px_60px]"
              style={{
                  backgroundImage: `
        linear-gradient(270deg, hsla(0, 0%, 100%, 0) 25%, hsla(0, 0%, 100%, 0) 25.1%),
        linear-gradient(to right, #e2e8f0 0.5px, transparent 3.1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px),
        linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 70%)`,
              }}
          >
              {/* Floating Circles with subtle scaling and hovering animation */}
              <motion.div
                  className="absolute top-[-35px] left-[200px] md:left-[100px] lg:left-[300px] h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 bg-yellow-500 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                  className="absolute top-[50px] right-[20px] md:right-[50px] h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] bg-blue-700 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div
                  className="absolute bottom-10 right-[150px] md:right-[300px] h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                  className="absolute bottom-[-40px] left-4 md:left-8 h-20 w-20 md:h-24 md:w-24 lg:h-[200px] lg:w-[200px] bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
              />
          </motion.div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-start justify-center h-full pl-6 md:pl-10 lg:pl-12 text-left">
              <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
              >
                  Bridging The Gap Between
              </motion.h1>
              <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2 md:mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
              >
                  Theory And Practice.
              </motion.h1>
              <motion.p
                  className="mt-2 md:mt-4 max-w-md text-sm md:text-lg text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
              >
                  The Google Developer Student Club at RCCIIT is a
                  university-based community group powered by Google Developers.
              </motion.p>
              <motion.div
                  className="mt-4 md:mt-8 space-x-2 md:space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
              >
                  <a
                      href="#"
                      className="inline-block px-4 py-2 md:px-6 md:py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                      Join Us
                  </a>
                  <a
                      href="#"
                      className="inline-block px-4 py-2 md:px-6 md:py-3 text-gray-800 border-2 border-gray-300 rounded-md hover:bg-gray-50 bg-white"
                  >
                      Contact Us
                  </a>
              </motion.div>
          </div>
      </div>
=======
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

const GDSCLanding = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100 });

  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gray-50">
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
          {/* Google Dots Wavy Animation */}
          <div className="flex justify-center space-x-3 mb-8">
            <GoogleDot color="bg-blue-500" delay={0} />
            <GoogleDot color="bg-red-500" delay={0.2} />
            <GoogleDot color="bg-yellow-500" delay={0.4} />
            <GoogleDot color="bg-green-500" delay={0.6} />
          </div>

          <motion.h1
            className="text-5xl text-black md:text-7xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bridging The Gap Between
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
              Theory And Practice
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-center text-gray-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            The Google Developer Student Club at RCCIIT is a university-based community group powered by Google Developers.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Join Us
            </button>
            <button className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Vision Mission Goals Section with Parallax */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <ParallaxSection yOffset={-30}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "🌟 Vision",
                  content: "Our vision is to create a world where technology and innovation lead to the betterment of human lives.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "🎯 Mission",
                  content: "Our mission is to empower individuals and organizations through cutting-edge technological solutions.",
                  color: "from-red-500 to-red-600"
                },
                {
                  title: "🚀 Goal",
                  content: "Our goal is to continuously push the boundaries of what's possible and lead the way towards a more prosperous future.",
                  color: "from-yellow-500 to-yellow-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`p-8 bg-gradient-to-br ${item.color} text-white h-full`}>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ParallaxSection>
        </div>
      </section>
      {/* Resources Section */}
      {/* Resources Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800">Resources</h2>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              Explore key resources to help you get started, learn more, and apply your skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <MapPin size={24} />, text: "Location" },
              { icon: <Book size={24} />, text: "About GDG" },
              { icon: <Users size={24} />, text: "How to Apply" },
              { icon: <Phone size={24} />, text: "Who can apply?" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="mb-4 text-blue-500">{item.icon}</div>
                <p className="font-semibold text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
>>>>>>> 356d5ea (add revamp landing page)
  );
};

export default GDSCLanding;
