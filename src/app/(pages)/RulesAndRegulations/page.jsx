'use client'
import { motion } from "framer-motion";

export default function RulesAndRegulations() {
    return (
        <>
            <div className="px-12 justify-content">
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
                        className="text-gray-600 text-l mt-4 max-w-6xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Welcome to Google Developer Student Clubs RCC Institute of Information Technology (GDSC RCIIT). To ensure a productive and respectful environment for all participants, members, and contributors, we have established the following rules and regulations. By participating in any GDSC RCIIT event or activity, you agree to abide by these rules.
                    </motion.p>
                </div>
                <h1></h1>
                <p>
                </p>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">1. General Conduct</h2>
                <p>
                    All participants are expected to conduct themselves in a manner that reflects positively on GDSC RCIIT. This includes being respectful to other participants, speakers, organizers, and any third-party collaborators. Inappropriate behavior, harassment, or discrimination of any kind will not be tolerated.
                </p>
                <ul>
                    <li>~ Treat everyone with respect, regardless of their background, race, gender, or opinions.</li>
                    <li>~ Avoid any behavior that could be perceived as harassment, bullying, or offensive.</li>
                    <li>~ Foster a collaborative and inclusive environment for learning and sharing knowledge.</li>
                </ul>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">2. Event Registration and Attendance</h2>
                <p>
                    To participate in GDSC RCIIT events, workshops, or competitions, all participants must register through the official platform provided. You agree to:
                </p>
                <ul>
                    <li>~ Provide accurate and up-to-date information during registration.</li>
                    <li>~ Attend the event on time and actively participate in scheduled activities.</li>
                    <li>~ Notify the organizers in case of cancellation or if you are unable to attend after registering.</li>
                </ul>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">3. Code of Conduct for Events and Competitions</h2>
                <p>
                    GDSC RCIIT events and competitions are designed to foster collaboration, learning, and innovation. All participants must adhere to the following rules:
                </p>
                <ul>
                    <li>~ Respect time limits, rules, and regulations set for each specific event or competition.</li>
                    <li>~ Ensure that all work submitted during competitions or hackathons is original and does not violate any copyright or intellectual property laws.</li>
                    <li>~ Respect the decisions made by judges, organizers, and mentors.</li>
                    <li>~ Avoid any form of cheating, plagiarism, or sabotage of other participants' work.</li>
                </ul>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">4. Use of Resources</h2>
                <p>
                    During workshops, hackathons, and other events, participants may be provided with access to various resources, including software, development tools, and mentorship. Participants must:
                </p>
                <ul>
                    <li>~ Use these resources responsibly and for their intended purpose.</li>
                    <li>~ Avoid any misuse or unauthorized distribution of materials or tools provided during events.</li>
                    <li>~ Respect the intellectual property rights of others and the fair use of shared resources.</li>
                </ul>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">5. Online and Social Media Conduct</h2>
                <p>
                    GDSC RCIIT encourages participants to engage and share their experiences online. However, participants must maintain professionalism and respect when posting on social media or other public platforms:
                </p>
                <ul>
                    <li>~ Avoid posting negative or inflammatory comments about individuals, events, or the organization.</li>
                    <li>~ Do not share confidential information, including details of unannounced projects or private discussions.</li>
                    <li>~ Credit GDSC RCIIT appropriately when sharing event photos, presentations, or content.</li>
                </ul>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">6. Health and Safety</h2>
                <p>
                    For in-person events, participants must follow all health and safety guidelines provided by GDSC RCIIT or the venue. This includes:
                </p>
                <ul>
                    <li>~ Following proper hygiene and sanitation protocols.</li>
                    <li>~ Complying with any safety measures, such as wearing masks or maintaining social distancing, as required by local regulations or event guidelines.</li>
                    <li>~ Reporting any safety hazards or incidents to event organizers immediately.</li>
                </ul>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">7. Breach of Rules</h2>
                <p>
                    Violation of these rules and regulations may result in disciplinary action, including but not limited to:
                </p>
                <ul>
                    <li>~ Warning or reprimand from the organizers.</li>
                    <li>~ Disqualification from events or competitions.</li>
                    <li>~ Removal from the event or GDSC RCIIT activities without a refund (if applicable).</li>
                    <li>~ Permanent exclusion from future GDSC RCIIT events and activities.</li>
                </ul>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">8. Amendments</h2>
                <p>
                    GDSC RCIIT reserves the right to modify or update these rules and regulations at any time. Any changes will be communicated to participants, and it is your responsibility to stay informed of any updates. Continued participation in GDSC RCIIT activities implies acceptance of the revised rules.
                </p>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">9. Contact Information</h2>
                <p>
                    If you have any questions or concerns regarding these rules and regulations, feel free to contact us at:
                </p>
                <p><strong><i>Email</i></strong>: gdsc.rciit@gmail.com</p>
                <p><strong><i>Address</i></strong>: RCC Institute of Information Technology, Kolkata, India</p>

                <p className="mb-6">Thank you for adhering to these rules and regulations and contributing to the positive experience at GDSC RCIIT.</p>
            </div>
        </>
    );
}
