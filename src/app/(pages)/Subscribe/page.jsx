'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Subscribe() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1 }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 }
        }
    };

    const inputVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1 }
        }
    };

    return (
        <>
            <motion.div
                className="relative bg-white -top-8 h-fit md2:h-screen lg:h-screen flex flex-col lg:flex-row my-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div
                    className="left__container w-full lg:w-1/2 h-fit md2:h-1/3 xl:h-full flex justify-center items-center lg:border-r"
                    variants={imageVariants}
                >
                    <Image src="/Newsletter.png" width={400} height={300} alt="Your Logo" />
                </motion.div>

                <motion.div
                    className="right__container w-full lg:w-1/2 h-fit md2:h-1/3 xl:h-full flex justify-center items-center lg:border-l"
                    variants={containerVariants}
                >
                    <div className="flex flex-col items-center gap-8 w-full px-8">
                        <motion.div className="flex flex-col gap-1" variants={textVariants}>
                            <h1 className="font-bold text-black text-4xl text-center">Subscribe to our Newsletter!</h1>
                            <p className="text-gray-900 text-center">Get the latest updates delivered to your inbox.</p>
                        </motion.div>
                        <motion.div className="flex flex-col gap-2 w-full lg:w-2/3" variants={inputVariants}>
                            <input
                                type="email"
                                id="email"
                                placeholder="youremail@gmail.com"
                                className="bg-gray-100 rounded-lg w-full text-center h-12 focus:outline-slate-400 focus:shadow-lg transition-shadow duration-300 ease-in-out"
                            />
                            <Button className="hover:scale-105 transition-transform duration-300 ease-in-out">Subscribe</Button>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
