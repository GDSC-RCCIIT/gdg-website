'use client'
import { motion } from "framer-motion";
import { AiOutlineInfoCircle, AiOutlineSafetyCertificate, AiOutlineWarning, AiFillProfile } from "react-icons/ai";
import { MdEmojiEvents, MdEmail } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";

// Sidebar Component
function Sidebar() {
    return (
        <div className="hidden lg:block lg:w-1/4 bg-gradient-to-b from-blue-500 to-purple-600 text-white p-6 h-screen sticky top-0 overflow-y-auto">
            <ul className="space-y-6">
                <li className="hover:text-indigo-200">
                    <a href="#general-conduct" className="flex items-center">
                        <AiOutlineInfoCircle className="inline mr-2" /> General Conduct
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#event-registration" className="flex items-center">
                        <MdEmojiEvents className="inline mr-2" /> Event Registration
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#code-of-conduct" className="flex items-center">
                        <AiOutlineSafetyCertificate className="inline mr-2" /> Code of Conduct
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#use-of-resources" className="flex items-center">
                        <AiFillProfile className="inline mr-2" /> Use of Resources
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#social-media-conduct" className="flex items-center">
                        <MdEmail className="inline mr-2" /> Social Media Conduct
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#health-and-safety" className="flex items-center">
                        <GiHealthNormal className="inline mr-2" /> Health & Safety
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#breach-of-rules" className="flex items-center">
                        <AiOutlineWarning className="inline mr-2" /> Breach of Rules
                    </a>
                </li>
                <li className="hover:text-indigo-200">
                    <a href="#contact-information" className="flex items-center">
                        <MdEmail className="inline mr-2" /> Contact Information
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default function RulesAndRegulations() {
    return (
        <div className="flex flex-col lg:flex-row">
            {/* Sidebar for quick navigation */}
            <Sidebar />

            {/* Main Content */}
            <div className="px-6 lg:w-3/4 lg:h-screen overflow-y-auto text-gray-800">
                {/* Title */}
                <div className="text-center pt-10">
                    <motion.h1
                        className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Rules and Regulations for GDSC RCIIT
                    </motion.h1>
                    <motion.p
                        className="text-gray-600 text-l mt-4 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Welcome to GDSC RCIIT! Please adhere to these rules to maintain a productive environment.
                    </motion.p>
                </div>

                {/* Sections */}
                <Section title="General Conduct" id="general-conduct" icon={<AiOutlineInfoCircle />}>
                    <p>Participants should conduct themselves positively and respectfully at GDSC RCIIT events.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Respect everyone, regardless of background or opinions.</li>
                        <li>Maintain a collaborative, inclusive environment.</li>
                    </ul>
                </Section>

                <Section title="Event Registration" id="event-registration" icon={<MdEmojiEvents />}>
                    <p>To join events, register accurately and participate actively.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Provide accurate information during registration.</li>
                        <li>Attend events punctually and participate fully.</li>
                    </ul>
                </Section>

                <Section title="Code of Conduct" id="code-of-conduct" icon={<AiOutlineSafetyCertificate />}>
                    <p>Respect time limits, and rules in events, maintaining originality in submissions.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Respect time limits and rules in events.</li>
                        <li>Ensure all submitted work is original.</li>
                    </ul>
                </Section>

                <Section title="Use of Resources" id="use-of-resources" icon={<AiFillProfile />}>
                    <p>Utilize provided resources responsibly and respect intellectual property rights.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Use resources responsibly and as intended.</li>
                    </ul>
                </Section>

                <Section title="Social Media Conduct" id="social-media-conduct" icon={<MdEmail />}>
                    <p>Engage online respectfully and maintain professionalism in public posts.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Avoid posting inflammatory comments.</li>
                    </ul>
                </Section>

                <Section title="Health and Safety" id="health-and-safety" icon={<GiHealthNormal />}>
                    <p>Follow health and safety protocols during in-person events.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Follow proper hygiene protocols.</li>
                    </ul>
                </Section>

                <Section title="Breach of Rules" id="breach-of-rules" icon={<AiOutlineWarning />}>
                    <p>Violations may result in disciplinary actions, including exclusion from future events.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Warning or reprimand from organizers.</li>
                    </ul>
                </Section>

                <Section title="Contact Information" id="contact-information" icon={<MdEmail />}>
                    <p>
                        Have questions? Contact us at:
                        <br /><strong>Email:</strong> gdsc.rciit@gmail.com
                        <br /><strong>Address:</strong> RCC Institute of Information Technology, Kolkata, India
                    </p>
                </Section>

                <p className="mt-6 text-center">Thank you for contributing to the positive experience at GDSC RCIIT.</p>
            </div>
        </div>
    );
}

// Reusable Section Component
function Section({ title, id, icon, children }) {
    return (
        <motion.div
            className="mt-8 p-4 border-b border-gray-200"
            id={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl mb-2 text-indigo-400 font-bold flex items-center">
                {icon} <span className="ml-2">{title}</span>
            </h2>
            {children}
        </motion.div>
    );
}
