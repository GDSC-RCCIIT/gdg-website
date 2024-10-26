import React from 'react';
import { MapPin, Laptop, Users, Code } from 'lucide-react';

// Hero Component with creative background
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
        {/* Code-themed decorative elements */}
        <div className="absolute top-[-20px] left-[200px] h-36 w-36 bg-blue-500 rounded-lg transform rotate-12 opacity-80"></div>
        <div className="absolute top-[60px] right-[80px] h-[300px] w-[300px] border-4 border-indigo-600 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-[400px] h-28 w-28 bg-green-500 rounded-lg transform -rotate-12 opacity-80"></div>
        <div className="absolute bottom-[-40px] left-8 h-[180px] w-[180px] bg-purple-500 rounded-lg transform rotate-45 opacity-20"></div>
        
        {/* Code symbols */}
        <div className="absolute top-20 left-[400px] text-4xl text-gray-300 font-mono">{`{ }`}</div>
        <div className="absolute bottom-40 right-[200px] text-4xl text-gray-300 font-mono">{`</>`}</div>
        <div className="absolute top-[200px] right-[400px] text-4xl text-gray-300 font-mono">{`< />`}</div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full pl-12 text-left">
        <h1 className="text-5xl font-bold text-gray-800">
          Connect with Local Developers
        </h1>
        <h1 className="text-5xl font-bold text-gray-800 mt-4">
          Build Together, Grow Together
        </h1>
        <p className="mt-4 max-w-lg text-lg text-gray-600">
          Join a vibrant community of developers in your area. Share knowledge, collaborate on projects, and grow your network with passionate technologists of all skill levels.
        </p>
        <div className="mt-8 space-x-4">
          <a
            href="#"
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Find Events
          </a>
          <a
            href="#"
            className="inline-block px-6 py-3 text-gray-800 border-2 border-gray-300 rounded-md hover:bg-gray-50 bg-white"
          >
            Join Community
          </a>
        </div>
      </div>
    </div>
  );
};

// Spotlight Component modified for developer events
const Spotlight = () => {
  const spotlightEvents = [
    {
      title: 'DevFest 2024',
      description: 'Annual developer festival featuring workshops, talks, and hands-on coding sessions.',
      location: 'Hybrid Event',
      office: 'Delhi + Virtual',
      image: '/dev1.jpeg', 
    },
    {
      title: 'AI/ML Study Group',
      description: 'Weekly meetups to explore and practice machine learning concepts together.',
      location: 'In Person',
      office: 'Bangalore Tech Hub',
      image: '/dev2.jpeg', 
    },
    {
      title: 'Code & Coffee',
      description: 'Monthly morning meetups where developers gather to code, chat, and collaborate.',
      location: 'In Person',
      office: 'Mumbai Workspace',
      image: '/dev3.jpeg', 
    },
    {
      title: 'Web Dev Workshop Series',
      description: 'Learn modern web development through hands-on projects and mentorship.',
      location: 'Online',
      office: 'Virtual Event',
      image: '/dev4.jpeg', 
    },
  ];

  return (
    <div className="mt-16 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-6">Featured Events</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {spotlightEvents.map((event, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 w-72">
            <img src={event.image} alt={event.title} className="rounded-t-lg w-full h-40 object-cover" />
            <div className="mt-4">
              <h3 className="font-bold text-xl">{event.title}</h3>
              <p className="mt-2 text-gray-600">{event.description}</p>
              {event.location && (
                <div className="mt-4 flex items-center space-x-2 text-gray-500">
                  <Laptop className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              )}
              {event.office && (
                <div className="mt-2 flex items-center space-x-2 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{event.office}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Path to Success Section modified for developer community
const PathToSuccess = () => {
  return (
    <section className="py-12 px-6 md:px-16 ml-40 mr-40">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Why Join Our Developer Community?</h2>
      
      {/* Learn */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <img
          src="/dev5.jpeg"
          alt="Learning"
          className="w-full md:w-1/2 h-64 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2">
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">📚 Learn Together</h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Participate in workshops, study groups, and hands-on coding sessions. Share knowledge and learn from experienced developers in your local community.
          </p>
        </div>
      </div>

      {/* Network */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-16">
        <img
           src="/dev6.jpeg"
          alt="Networking"
          className="w-full md:w-1/2 h-64 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="md:mr-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2">
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">🤝 Build Connections</h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Meet like-minded developers, find mentors, and build lasting professional relationships. Our community welcomes developers of all experience levels.
          </p>
        </div>
      </div>

      {/* Grow */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <img
            src="/dev7.jpeg"
          alt="Growth"
          className="w-full md:w-1/2 h-64 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2">
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">🚀 Grow Together</h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Collaborate on real projects, share job opportunities, and grow your skills through practical experience. Our community is here to support your developer journey.
          </p>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
const LocalDevPage = () => {
  return (
    <div>
      <Hero />
      <Spotlight />
      <PathToSuccess />
    </div>
  );
};

export default LocalDevPage;