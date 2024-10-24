// const Hero = () => {
//   return (
//     <div className="relative h-[600px] bg-white overflow-hidden border border-gray-300">
//       <div
//         className="absolute inset-0 grid grid-cols-12 gap-4 bg-[length:60px_60px]"
//         style={{
//           backgroundImage: `
//             linear-gradient(270deg, hsla(0, 0%, 100%, 0) 25%, hsla(0, 0%, 100%, 0) 25.1%),
//             linear-gradient(to right, #e2e8f0 0.5px, transparent 3.1px),
//             linear-gradient(to bottom, #e2e8f0 1px, transparent 1px),
//             linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 70%)`
//         }}
//       >
//         <div className="absolute top-[-35px] left-[300px] h-36 w-36 bg-yellow-500 rounded-full"></div>
//         <div className="absolute top-[50px] right-[50px] h-[400px] w-[400px] bg-blue-700 rounded-full"></div>
//         <div className="absolute bottom-10 right-[500px] h-28 w-28 bg-red-500 rounded-full"></div>
//         <div className="absolute bottom-[-60px] left-8 h-[200px] w-[200px] bg-green-500 rounded-full"></div>
//       </div>

//       <div className="relative z-100 flex flex-col items-start justify-center h-full pl-12 text-left">
//         <h1 className="text-5xl font-bold text-black">
//           Bridging The Gap Between
//         </h1>
//         <h1 className="text-5xl font-bold text-black mt-4">
//           Theory And Practice.
//         </h1>
//         <p className="mt-4 max-w-lg text-lg text-gray-600">
//           The Google Developer Student Club at RCCIIT is a university-based community group powered by Google Developers. By joining RCCIIT, students gain experience working in a team environment and building technological solutions for their community.
//         </p>
//         <div className="mt-8 space-x-4">
//           <a
//             href="#"
//             className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
//           >
//             Join Us
//           </a>
//           <a
//             href="#"
//             className="inline-block px-6 py-3 text-gray-800 border-2 border-gray-300 rounded-md hover:bg-gray-50 bg-white"
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

'use client'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-white overflow-hidden border border-gray-300">
      <motion.div
        className="absolute inset-0 grid grid-cols-12 gap-4 bg-[length:60px_60px]"
        style={{
          backgroundImage: `
            linear-gradient(270deg, hsla(0, 0%, 100%, 0) 25%, hsla(0, 0%, 100%, 0) 25.1%),
            linear-gradient(to right, #e2e8f0 0.5px, transparent 3.1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 70%)`
        }}
      >
        {/* Floating Circles with subtle scaling and hovering animation */}
        <motion.div
          className="absolute top-[-35px] left-[300px] h-36 w-36 bg-yellow-500 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[50px] right-[50px] h-[400px] w-[400px] bg-blue-700 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.div
          className="absolute bottom-10 right-[500px] h-28 w-28 bg-red-500 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-[-60px] left-8 h-[200px] w-[200px] bg-green-500 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
        />
      </motion.div>

      {/* Text and buttons with fade-in and upward motion */}
      <div className="relative z-100 flex flex-col items-start justify-center h-full pl-12 text-left">
        <motion.h1
          className="text-5xl font-bold text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bridging The Gap Between
        </motion.h1>
        <motion.h1
          className="text-5xl font-bold text-black mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Theory And Practice.
        </motion.h1>
        <motion.p
          className="mt-4 max-w-lg text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The Google Developer Student Club at RCCIIT is a university-based community group powered by Google Developers. By joining RCCIIT, students gain experience working in a team environment and building technological solutions for their community.
        </motion.p>
        <motion.div
          className="mt-8 space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="#"
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Join Us
          </a>
          <a
            href="#"
            className="inline-block px-6 py-3 text-gray-800 border-2 border-gray-300 rounded-md hover:bg-gray-50 bg-white"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
