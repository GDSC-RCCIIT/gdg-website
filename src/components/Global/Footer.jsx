import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        
        {/* Column 1 - GDSC-RCIIT and Social Media */}
        <div>
          <h2 className="text-2xl font-bold mb-4">GDSC-RCIIT</h2>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram className="text-black hover:text-gray-400" size={24} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-black hover:text-gray-400" size={24} />
            </a>
            <a href="https://www.github.com/" target="_blank" rel="noreferrer">
              <FaGithub className="text-black hover:text-gray-400" size={24} />
            </a>
          </div>
        </div>
        
        {/* Column 2 - Links to Pages */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul>
            <li><a href="/" className="hover:underline">Homepage</a></li>
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
            <li><a href="/resources" className="hover:underline">Resources</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
            <li><a href="/join-us" className="hover:underline">Join Us</a></li>
          </ul>
        </div>

        {/* Column 3 - Legal and Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Footer Pages</h3>
          <ul>
            <li>© {new Date().getFullYear()} GDSC-RCIIT. All rights reserved.</li>
            <li>Email: <a href="mailto:contact@gdsc-rciit.com" className="hover:underline">contact@gdsc-rciit.com</a></li>
            <li>Phone: <a href="tel:+123456789" className="hover:underline">+123 456 789</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
            <li><a href="/sitemap" className="hover:underline">Sitemap</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
