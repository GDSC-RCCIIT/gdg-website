'use client'
import { motion } from "framer-motion";

export default function TermsAndConditions() {
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


                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">1. Acceptance of Terms</h2>
                <p>
                    By using this website, you agree to be bound by these Terms & Conditions, as well as any additional terms and policies referenced herein. If you do not agree with any of these terms, you must not use this website or participate in any GDSC RCIIT activities.
                </p>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">2. Use of Website and Services</h2>
                <p>
                    GDSC RCIIT provides access to information, events, workshops, and services aimed at students and professionals. You agree to use this website for lawful purposes only and in a manner that does not infringe the rights of, or restrict the use and enjoyment of, this site by any third party. Prohibited activities include, but are not limited to:
                </p>
                <ul>
                    <li>Posting or transmitting harmful, offensive, or unlawful content.</li>
                    <li>Attempting to access restricted areas of the website without proper authorization.</li>
                    <li>Using this website to distribute spam or unsolicited messages.</li>
                    <li>Engaging in any activity that disrupts the website's operations or security.</li>
                </ul>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">3. Intellectual Property</h2>
                <p>
                    All content on the GDSC RCIIT website, including text, graphics, logos, icons, images, and software, is the property of GDSC RCIIT and its partners, protected under intellectual property laws. You may not reproduce, distribute, or modify any part of this content without express permission from GDSC RCIIT.
                </p>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">4. Event Participation</h2>
                <p>
                    By registering for events, workshops, or activities hosted by GDSC RCIIT, you agree to follow the event guidelines and code of conduct established for each event. Failure to adhere to these guidelines may result in disqualification from the event or removal from GDSC RCIIT activities.
                </p>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">5. Registration and Account Security</h2>
                <p>
                    When signing up for events or creating an account on our website, you agree to provide accurate, current, and complete information about yourself. You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.
                </p>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">6. External Links</h2>
                <p>
                    The GDSC RCIIT website may contain links to third-party websites or services. These links are provided for convenience and informational purposes only. We do not endorse, monitor, or have any control over these external sites, and we are not responsible for their content, privacy practices, or terms of use.
                </p>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">7. Limitation of Liability</h2>
                <p>
                    GDSC RCIIT and its organizers will not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website, participation in events, or reliance on any content provided. This includes, but is not limited to, damages resulting from errors, interruptions, or loss of data.
                </p>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">8. Privacy</h2>
                <p>
                    GDSC RCIIT is committed to protecting your privacy and handling your personal data responsibly. Our <a href="/privacy-policy">Privacy Policy</a> explains how we collect, use, and protect your information when you interact with our website and services. By using our website, you consent to the terms outlined in our Privacy Policy.
                </p>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">9. Changes to Terms and Conditions</h2>
                <p>
                    GDSC RCIIT reserves the right to update or modify these Terms & Conditions at any time without prior notice. It is your responsibility to review these terms periodically. Continued use of the website after any changes indicates acceptance of the new terms.
                </p>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">10. Termination of Access</h2>
                <p>
                    GDSC RCIIT reserves the right to suspend or terminate your access to the website or any part of our services at any time, without notice, for violating these terms or for any other reason we deem necessary.
                </p>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">11. Governing Law</h2>
                <p>
                    These Terms & Conditions shall be governed by and construed in accordance with the laws of India, and any disputes arising from your use of the website will be subject to the jurisdiction of the courts in Kolkata, India.
                </p>

                <h2 className="text-2xl mb-2 mt-4 text-indigo-400 font-bold ">12. Contact Information</h2>
                <p>
                    If you have any questions or concerns regarding these Terms & Conditions, please feel free to contact us at:
                </p>
                <p><strong><i>Email</i></strong>: gdsc.rciit@gmail.com</p>
                <p><strong><i>Address</i></strong>: RCC Institute of Information Technology, Kolkata, India</p>

                <p className="mb-6">By using our website and services, you agree to these Terms & Conditions.</p>
            </div>
        </>
    );
}
