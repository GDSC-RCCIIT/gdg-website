import { Button } from "@/components/ui/button";
import Image from "next/image"
 import Notification from '../ui/notification';
import { AspectRatio } from "@/components/ui/aspect-ratio"
 

const Hero = () => {
  return (
    <section
      className="relative  bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('../../app/image.png')" }}
    >
      <Notification/>
      <div className="absolute inset-0 bg-white bg-opacity-60"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto p-6">
        {/* Headline */}
        <h1 className="text-black bg-clip-text text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to GDSC-RCIIT
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl mb-8">
          A platform to learn, build, and grow together as a community. Join us for events, projects, and resources that empower your tech journey.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Button variant="primary" size="lg" className="px-6 py-3">
            Join Us
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-6 py-3 text-white border-black bg-black hover:bg-white hover:text-black"
            // className="px-6 py-3 bg-gradient-to-r from-red-500 to-blue-500 text-white font-bold hover:bg-white hover:text-black"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
