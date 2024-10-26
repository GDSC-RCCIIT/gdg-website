'use client'
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <>
            <div className="px-12 justify-content">
                <div>
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
                            At <strong><i>Google Developer Student Clubs RCIIT (GDSC RCIIT)</i></strong>, we prioritize your privacy and are committed to safeguarding the personal information you share with us. This Privacy Policy outlines how we collect, use, and protect your data when you interact with our website, services, and activities.
                        </motion.p>
                    </div>

                    <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">1. Information We Collect</h2>
                    <p>We may collect the following types of personal information when you visit our website or participate in GDSC RCIIT activities:</p>
                    <ul>
                        <li>
                            <strong><i>Personal Identifiable Information (PII)</i></strong>: Your name, email address, phone number, or other contact details when you sign up for events or communicate with us.
                        </li>
                        <li>
                            <strong><i>Technical Information</i></strong>: Your IP address, browser type, operating system, and browsing behavior on our website through cookies and other tracking technologies.
                        </li>
                        <li>
                            <strong><i>Event Participation Data</i></strong>: Information related to your registration for GDSC RCIIT events, workshops, or programs.
                        </li>
                        <li>
                            <strong><i>Feedback and Communication</i></strong>: Your comments, messages, or feedback provided during surveys, event evaluations, or through direct communication with our team.
                        </li>
                    </ul>

                    <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">2. How We Use Your Information</h2>
                    <p>We use the information collected for the following purposes:</p>
                    <ul>
                        <li><strong><i>To Provide Services</i></strong>: Organizing and managing events, workshops, and hackathons, and keeping you informed about upcoming opportunities.</li>
                        <li><strong><i>Communication</i></strong>: Sending newsletters, event updates, and responding to your inquiries.</li>
                        <li><strong><i>Improvement of Services</i></strong>: Analyzing user behavior and feedback to improve the content and services on our website and enhance the overall GDSC experience.</li>
                        <li><strong><i>Security</i></strong>: Maintaining the safety and integrity of our website and services by monitoring for any suspicious activity.</li>
                    </ul>

                    <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">3. Cookies and Tracking Technologies</h2>
                    <p>We use cookies and similar technologies to enhance your browsing experience and gather analytics on website performance. You can control the use of cookies by adjusting your browser settings; however, disabling cookies may affect some functionalities of the website.</p>

                    <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">4. Sharing Your Information</h2>
                    <p>GDSC RCIIT respects your privacy and does not sell, rent, or trade your personal information. We may share your data in the following scenarios:</p>
                    <ul>
                        <li><strong><i>With Consent</i></strong>: Sharing your information with event partners or collaborators when you have given explicit consent.</li>
                        <li><strong><i>For Legal Reasons</i></strong>: Disclosing your information if required by law or in response to legal requests from authorities.</li>
                        <li><strong><i>Service Providers</i></strong>: Sharing data with trusted third-party service providers who assist in hosting events or managing the website, under strict confidentiality agreements.</li>
                    </ul>

                    <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">5. Data Security</h2>
                    <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Despite these measures, no system is completely secure, and we cannot guarantee the absolute security of your data.</p>

                    <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">6. Retention of Information</h2>
                    <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. You may request the deletion of your data at any time by contacting us.</p>

                    <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">7. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li><strong><i>Access</i></strong>: Request access to your personal information and receive a copy of it.</li>
                        <li><strong><i>Correction</i></strong>: Request the correction of inaccurate or incomplete personal data.</li>
                        <li><strong><i>Deletion</i></strong>: Request the deletion of your personal information under certain circumstances.</li>
                        <li><strong><i>Opt-Out</i></strong>: Opt-out of receiving promotional communications from us by following the unsubscribe instructions in emails.</li>
                    </ul>

                    <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">8. Third-Party Links</h2>
                    <p>Our website may contain links to third-party websites, such as event registration platforms or partner websites. GDSC RCIIT is not responsible for the privacy practices or content of these external sites, and we encourage you to review their privacy policies.</p>

                    <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">9. Updates to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Any updates will be posted on this page, and we encourage you to review the policy periodically.</p>

                    <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">10. Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at:</p>
                    <p><strong><i>Email</i></strong>: gdsc.rciit@gmail.com</p>
                    <p><strong><i>Address</i></strong>: RCC Institute of Information Technology, Kolkata, India</p>

                    <p className="mb-6">By using our website and participating in our activities, you agree to the terms of this Privacy Policy.</p>
                </div>
            </div>
        </>
    );
}
