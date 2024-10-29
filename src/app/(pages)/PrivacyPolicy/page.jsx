'use client'
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaShieldAlt, FaUserSecret, FaCookieBite, FaShareAlt, FaLock, FaRegClock, FaUserCheck, FaExternalLinkAlt, FaSyncAlt, FaEnvelope } from "react-icons/fa";

export default function PrivacyPolicy() {
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
                        Privacy Policy for GDSC RCIIT
                    </motion.h1>
                    <motion.p
                        className="text-gray-600 text-xl mt-4 max-w-6xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        At <strong><i>Google Developer Student Clubs RCIIT (GDSC RCIIT)</i></strong>, we prioritize your privacy and are committed to safeguarding the personal information you share with us.
                    </motion.p>
                </div>
                <Section
                    title="1. Information We Collect"
                    icon={<FaUserSecret className="inline mr-2 text-indigo-500" />}
                    id="info-collect"
                >
                    <p>We may collect the following types of personal information when you visit our website or participate in GDSC RCIIT activities:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong><i>Personal Identifiable Information (PII)</i></strong>: Your name, email address, phone number, or other contact details.</li>
                        <li><strong><i>Technical Information</i></strong>: Your IP address, browser type, operating system, and browsing behavior.</li>
                        <li><strong><i>Event Participation Data</i></strong>: Information related to your registration for GDSC RCIIT events.</li>
                        <li><strong><i>Feedback and Communication</i></strong>: Your comments, messages, or feedback provided during surveys or direct communication.</li>
                    </ul>
                </Section>

                <Section
                    title="2. How We Use Your Information"
                    icon={<FaShieldAlt className="inline mr-2 text-indigo-500" />}
                    id="use-info"
                >
                    <p>We use the information collected for the following purposes:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong><i>To Provide Services</i></strong>: Organizing and managing events and keeping you informed about upcoming opportunities.</li>
                        <li><strong><i>Communication</i></strong>: Sending newsletters, event updates, and responding to your inquiries.</li>
                        <li><strong><i>Improvement of Services</i></strong>: Analyzing user behavior and feedback to enhance the GDSC experience.</li>
                        <li><strong><i>Security</i></strong>: Monitoring for suspicious activity and ensuring the integrity of our website.</li>
                    </ul>
                </Section>

                <Section
                    title="3. Cookies and Tracking Technologies"
                    icon={<FaCookieBite className="inline mr-2 text-indigo-500" />}
                    id="cookies"
                >
                    <p>We use cookies and similar technologies to enhance your browsing experience and gather analytics on website performance. You can control cookies via your browser settings.</p>
                </Section>

                <Section
                    title="4. Sharing Your Information"
                    icon={<FaShareAlt className="inline mr-2 text-indigo-500" />}
                    id="sharing-info"
                >
                    <p>GDSC RCIIT does not sell, rent, or trade your personal information. We may share your data in the following scenarios:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong><i>With Consent</i></strong>: Sharing your information with event partners when you have given explicit consent.</li>
                        <li><strong><i>For Legal Reasons</i></strong>: Disclosing information if required by law.</li>
                        <li><strong><i>Service Providers</i></strong>: Sharing data with trusted service providers under strict confidentiality agreements.</li>
                    </ul>
                </Section>

                <Section
                    title="5. Data Security"
                    icon={<FaLock className="inline mr-2 text-indigo-500" />}
                    id="data-security"
                >
                    <p>We implement industry-standard security measures to protect your personal information from unauthorized access or disclosure.</p>
                </Section>

                <Section
                    title="6. Retention of Information"
                    icon={<FaRegClock className="inline mr-2 text-indigo-500" />}
                    id="retention"
                >
                    <p>We retain your personal information as long as necessary for the purposes outlined or as required by law. You may request data deletion by contacting us.</p>
                </Section>

                <Section
                    title="7. Your Rights"
                    icon={<FaUserCheck className="inline mr-2 text-indigo-500" />}
                    id="rights"
                >
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong><i>Access</i></strong>: Request access to your personal information.</li>
                        <li><strong><i>Correction</i></strong>: Request correction of inaccurate or incomplete data.</li>
                        <li><strong><i>Deletion</i></strong>: Request deletion of your personal information under certain circumstances.</li>
                        <li><strong><i>Opt-Out</i></strong>: Opt-out of promotional communications by following unsubscribe instructions.</li>
                    </ul>
                </Section>

                <Section
                    title="8. Third-Party Links"
                    icon={<FaExternalLinkAlt className="inline mr-2 text-indigo-500" />}
                    id="third-party"
                >
                    <p>Our website may contain links to third-party websites. GDSC RCIIT is not responsible for the privacy practices or content of external sites.</p>
                </Section>

                <Section
                    title="9. Updates to This Policy"
                    icon={<FaSyncAlt className="inline mr-2 text-indigo-500" />}
                    id="updates"
                >
                    <p>We may update this Privacy Policy from time to time. Any updates will be posted on this page, and we encourage you to review the policy periodically.</p>
                </Section>

                <Section
                    title="10. Contact Us"
                    icon={<FaEnvelope className="inline mr-2 text-indigo-500" />}
                    id="contact-us"
                >
                    <p>If you have questions about this Privacy Policy, please contact us:</p>
                    <p><strong>Email:</strong> gdsc.rciit@gmail.com</p>
                    <p><strong>Address:</strong> RCC Institute of Information Technology, Kolkata, India</p>
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
                    <a href="#info-collect" className="flex items-center">
                        <AiOutlineInfoCircle className="inline mr-2" /> Information We Collect
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#use-info" className="flex items-center">
                        <AiOutlineInfoCircle className="inline mr-2" /> How We Use Information
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#cookies" className="flex items-center">
                        <AiOutlineInfoCircle className="inline mr-2" /> Cookies & Tracking
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#sharing-info" className="flex items-center">
                        <AiOutlineInfoCircle className="inline mr-2" /> Sharing Information
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#data-security" className="flex items-center">
                        <AiOutlineInfoCircle className="inline mr-2" /> Data Security
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#retention" className="flex items-center">
                        <AiOutlineInfoCircle className="inline mr-2" /> Retention
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#rights" className="flex items-center">
                        <AiOutlineInfoCircle className="inline mr-2" /> Your Rights
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#third-party" className="flex items-center">
                        <AiOutlineInfoCircle className="inline mr-2" /> Third-Party Links
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#updates" className="flex items-center">
                        <AiOutlineInfoCircle className="inline mr-2" /> Updates
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#contact-us" className="flex items-center">
                        <AiOutlineInfoCircle className="inline mr-2" /> Contact Us
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
                {icon}{title}
            </h2>
            {children}
        </div>
    );
}
