"use client";
import React, { useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
// import ContactUsImage from "./Contactus.svg";
// import Image from "next/image";
import AOS from "aos";
import "./contact.css"
import "aos/dist/aos.css";
import Lottie from "react-lottie";
import animationData from "./conatct.json";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Animation will only run once
    });
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    isClickToPauseDisabled: true,
  };
  return (
    <div className="my-8 h-[500px] flex items-center flex-col justify-center">
      <div
        className="text-center pt-6 w-full"
        data-aos="fade-up" // AOS animation added
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Contact us
        </h1>
        <div className="mt-2 mx-auto w-54 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded w-3/4"></div>
      </div>
      <div className="flex gap-10 w-full justify-center">
        {/* <Image
          src={ContactUsImage}
          alt="Contact Us"
          width={400}
          height={300}
          data-aos="fade-right" // AOS animation added
        /> */}
        <Lottie
          options={defaultOptions}
          height={250}
          width={400}
          className="!m-0"
        />
        <Box
          component="form"
          sx={{
            mt: 4,
            maxWidth: 600,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          className="w-full"
          data-aos="fade-left" // AOS animation added
        >
          <TextField
            required
            label="Name"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": { borderColor: "#4F46E5" },
                "&.Mui-focused fieldset": { borderColor: "#4F46E5" },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#4F46E5" },
            }}
          />
          <TextField
            required
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": { borderColor: "#4F46E5" },
                "&.Mui-focused fieldset": { borderColor: "#4F46E5" },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#4F46E5" },
            }}
          />
          <TextField
            required
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": { borderColor: "#4F46E5" },
                "&.Mui-focused fieldset": { borderColor: "#4F46E5" },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#4F46E5" },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
            data-aos="zoom-in" // AOS animation added
          >
            Send Message
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
