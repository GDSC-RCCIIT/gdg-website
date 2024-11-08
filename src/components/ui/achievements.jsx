import React from 'react';
import { FaGithub,FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const TeamMembers = () => {
  // Array of team member data with Bengali names in English
  const teamMembers = [
    {
      name: "Sahil Banerjee",
      role: "Community Lead & Full-Stack Developer",
      description: "Sahil is the visionary behind GDSC RCCIIT, fostering innovation and collaboration within the tech community. Currently interning at Google, he leads efforts in cloud infrastructure and scalable solutions.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      socialLinks: [
        { icon: <FaGithub />, href: "#" },
        { icon: <FaInstagram />, href: "#" },
        { icon: <FaXTwitter />, href: "#" },
        { icon: <FaLinkedin />, href: "#" }
      ]
    },
    {
      name: "Subhash Ghosh",
      role: "Machine Learning Specialist",
      description: "Subhash pioneers machine learning projects and research at GDSC. A Meta intern, he's focused on developing AI-driven tools for enhanced user engagement and automated content moderation.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      socialLinks: [
        { icon: <FaGithub />, href: "#" },
        { icon: <FaInstagram />, href: "#" },
        { icon: <FaXTwitter />, href: "#" },
        { icon: <FaLinkedin />, href: "#" }
      ]
    },
    {
      name: "Arjun Mukherjee",
      role: "UI/UX Designer",
      description: "Arjun designs intuitive and engaging interfaces for GDSC projects. He interned at Amazon, where he crafted user-centered designs for e-commerce platforms, emphasizing accessibility and visual appeal.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
      socialLinks: [
        { icon: <FaGithub />, href: "#" },
        { icon: <FaInstagram />, href: "#" },
        { icon: <FaXTwitter />, href: "#" },
        { icon: <FaLinkedin />, href: "#" }
      ]
    },
    {
      name: "Riya Das",
      role: "Backend Developer & Data Engineer",
      description: "Riya is skilled in backend development and data engineering, building robust systems for GDSC. As an intern at Netflix, she contributed to scalable data pipelines and streaming data analysis.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      socialLinks: [
        { icon: <FaGithub />, href: "#" },
        { icon: <FaInstagram />, href: "#" },
        { icon: <FaXTwitter />, href: "#" },
        { icon: <FaLinkedin />, href: "#" }
      ]
    }
];


  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Achievemnts</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">The notable alumni of our past GDSC members who are now in MAANG companies</p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={member.avatar} alt={`${member.name} Avatar`} />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">{member.role}</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{member.description}</p>
                <ul className="flex space-x-4 sm:mt-0">
                  {member.socialLinks.map((social, socialIndex) => (
                    <li key={socialIndex}>
                      <a href={social.href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;