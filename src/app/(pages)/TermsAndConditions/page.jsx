'use client'
import { motion } from "framer-motion";
import { FaGavel, FaUserCheck, FaLink, FaShieldAlt, FaLock, FaListAlt, FaExternalLinkAlt, FaExclamationTriangle, FaEnvelope } from "react-icons/fa";

export default function TermsAndConditions() {
    return (
        <div className="flex flex-col lg:flex-row">
            <Sidebar />
            <div className="px-6 lg:w-3/4 text-gray-800 overflow-y-auto">
                <div className="text-center pt-10">
                    <motion.h1
                        className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Terms and Conditions for GDSC RCIIT
                    </motion.h1>

                    <motion.p
                        className="text-gray-600 text-xl mt-4 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Welcome to the official website of the Google Developer Student Clubs RCC Institute of Information Technology (GDSC RCIIT). By accessing and using our website, you agree to comply with the following terms and conditions. Please read these terms carefully before engaging with any of our services, activities, or content.
                    </motion.p>
                </div>
                <Section
                    title="1. Acceptance of Terms"
                    icon={<FaUserCheck className="inline mr-2 text-indigo-500" />}
                    id="acceptance"
                >
                    <p>
                        By using this website, you agree to be bound by these Terms & Conditions, as well as any additional terms and policies referenced herein. If you do not agree with any of these terms, you must not use this website or participate in any GDSC RCIIT activities.
                    </p>
                </Section>

                <Section
                    title="2. Use of Website and Services"
                    icon={<FaShieldAlt className="inline mr-2 text-indigo-500" />}
                    id="use-services"
                >
                    <p>
                        GDSC RCIIT provides access to information, events, workshops, and services aimed at students and professionals. You agree to use this website for lawful purposes only and in a manner that does not infringe the rights of, or restrict the use and enjoyment of, this site by any third party. Prohibited activities include, but are not limited to:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Posting or transmitting harmful, offensive, or unlawful content.</li>
                        <li>Attempting to access restricted areas of the website without proper authorization.</li>
                        <li>Using this website to distribute spam or unsolicited messages.</li>
                        <li>Engaging in any activity that disrupts the website's operations or security.</li>
                    </ul>
                </Section>

                <Section
                    title="3. Intellectual Property"
                    icon={<FaGavel className="inline mr-2 text-indigo-500" />}
                    id="intellectual-property"
                >
                    <p>
                        All content on the GDSC RCIIT website, including text, graphics, logos, icons, images, and software, is the property of GDSC RCIIT and its partners, protected under intellectual property laws. You may not reproduce, distribute, or modify any part of this content without express permission from GDSC RCIIT.
                    </p>
                </Section>

                <Section
                    title="4. Event Participation"
                    icon={<FaListAlt className="inline mr-2 text-indigo-500" />}
                    id="event-participation"
                >
                    <p>
                        By registering for events, workshops, or activities hosted by GDSC RCIIT, you agree to follow the event guidelines and code of conduct established for each event. Failure to adhere to these guidelines may result in disqualification from the event or removal from GDSC RCIIT activities.
                    </p>
                </Section>

                <Section
                    title="5. Registration and Account Security"
                    icon={<FaLock className="inline mr-2 text-indigo-500" />}
                    id="registration"
                >
                    <p>
                        When signing up for events or creating an account on our website, you agree to provide accurate, current, and complete information about yourself. You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.
                    </p>
                </Section>

                <Section
                    title="6. External Links"
                    icon={<FaExternalLinkAlt className="inline mr-2 text-indigo-500" />}
                    id="external-links"
                >
                    <p>
                        The GDSC RCIIT website may contain links to third-party websites or services. These links are provided for convenience and informational purposes only. We do not endorse, monitor, or have any control over these external sites, and we are not responsible for their content, privacy practices, or terms of use.
                    </p>
                </Section>

                <Section
                    title="7. Limitation of Liability"
                    icon={<FaExclamationTriangle className="inline mr-2 text-indigo-500" />}
                    id="liability"
                >
                    <p>
                        GDSC RCIIT and its organizers will not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website, participation in events, or reliance on any content provided. This includes, but is not limited to, damages resulting from errors, interruptions, or loss of data.
                    </p>
                </Section>

                <Section
                    title="8. Privacy"
                    icon={<FaShieldAlt className="inline mr-2 text-indigo-500" />}
                    id="privacy"
                >
                    <p>
                        GDSC RCIIT is committed to protecting your privacy and handling your personal data responsibly. Our <a href="/privacy-policy" className="text-indigo-500 underline">Privacy Policy</a> explains how we collect, use, and protect your information when you interact with our website and services. By using our website, you consent to the terms outlined in our Privacy Policy.
                    </p>
                </Section>

                <Section
                    title="9. Changes to Terms and Conditions"
                    icon={<FaLink className="inline mr-2 text-indigo-500" />}
                    id="changes"
                >
                    <p>
                        GDSC RCIIT reserves the right to update or modify these Terms & Conditions at any time without prior notice. It is your responsibility to review these terms periodically. Continued use of the website after any changes indicates acceptance of the new terms.
                    </p>
                </Section>

                <Section
                    title="10. Termination of Access"
                    icon={<FaLock className="inline mr-2 text-indigo-500" />}
                    id="termination"
                >
                    <p>
                        GDSC RCIIT reserves the right to suspend or terminate your access to the website or any part of our services at any time, without notice, for violating these terms or for any other reason we deem necessary.
                    </p>
                </Section>

                <Section
                    title="11. Governing Law"
                    icon={<FaGavel className="inline mr-2 text-indigo-500" />}
                    id="governing-law"
                >
                    <p>
                        These Terms & Conditions shall be governed by and construed in accordance with the laws of India, and any disputes arising from your use of the website will be subject to the jurisdiction of the courts in Kolkata, India.
                    </p>
                </Section>

                <Section
                    title="12. Contact Information"
                    icon={<FaEnvelope className="inline mr-2 text-indigo-500" />}
                    id="contact"
                >
                    <p>
                        If you have any questions or concerns regarding these Terms & Conditions, please feel free to contact us at:
                    </p>
                    <p><strong><i>Email:</i></strong> gdsc.rciit@gmail.com</p>
                    <p><strong><i>Address:</i></strong> RCC Institute of Information Technology, Kolkata, India</p>
                    <p className="mb-6">By using our website and services, you agree to these Terms & Conditions.</p>
                </Section>
            </div>
        </div>
    );
}

function Sidebar() {
    return (
        <div className="hidden lg:block w-1/4 bg-gradient-to-b from-blue-500 to-purple-600 text-white p-6 h-screen sticky top-0">
            <ul className="space-y-6">
                <li className="hover:text-indigo-200">
                    <a href="#acceptance" className="flex items-center">
                        <FaUserCheck className="inline mr-2" /> Acceptance of Terms
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#use-services" className="flex items-center">
                        <FaShieldAlt className="inline mr-2" /> Use of Website and Services
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#intellectual-property" className="flex items-center">
                        <FaGavel className="inline mr-2" /> Intellectual Property
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#event-participation" className="flex items-center">
                        <FaListAlt className="inline mr-2" /> Event Participation
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#registration" className="flex items-center">
                        <FaLock className="inline mr-2" /> Registration & Security
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#external-links" className="flex items-center">
                        <FaExternalLinkAlt className="inline mr-2" /> External Links
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#liability" className="flex items-center">
                        <FaExclamationTriangle className="inline mr-2" /> Limitation of Liability
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#privacy" className="flex items-center">
                        <FaShieldAlt className="inline mr-2" /> Privacy
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#changes" className="flex items-center">
                        <FaLink className="inline mr-2" /> Changes to Terms
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#termination" className="flex items-center">
                        <FaLock className="inline mr-2" /> Termination of Access
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#governing-law" className="flex items-center">
                        <FaGavel className="inline mr-2" /> Governing Law
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#contact" className="flex items-center">
                        <FaEnvelope className="inline mr-2" /> Contact Information
                    </a>
                </li>
            </ul>
        </div>
    );
}

function Section({ title, icon, id, children }) {
    return (
        <div id={id} className="mt-10">
            <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold">
                {icon} {title}
            </h2>
            {children}
        </div>
    );
}
