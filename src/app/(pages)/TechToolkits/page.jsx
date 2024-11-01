"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  IconButton,
  Container,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

import techStacks from "./techStacks";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scaleUp = {
  hover: { scale: 1.05 },
};

const TechToolkits = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ padding: "2rem" }}>
        <div className="text-center mb-8">
          <motion.h1
            className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            Tech Toolkits HUB
          </motion.h1>

          <motion.p
            className="text-gray-600 text-xl mt-4 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore the essential tools and technologies for web development,
            programming, and cloud platforms.
          </motion.p>
        </div>

        <Grid container spacing={4} justifyContent="center">
          {techStacks.map((stack, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1rem",
                    backgroundColor: "#f9f9f9",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                    },
                  }}
                  whileHover="hover"
                  variants={scaleUp}
                  transition={{ duration: 0.3 }}
                >
                  <CardHeader
                    title={stack.title}
                    titleTypographyProps={{
                      align: "center",
                      fontWeight: "bold",
                      fontSize: "1.25rem",
                      color: "#3c4043",
                    }}
                  />
                  <CardContent>
                    <Grid container justifyContent="center">
                      {stack.icons.map((item, idx) => (
                        <Box
                          key={idx}
                          sx={{ textAlign: "center", margin: "0.5rem" }}
                        >
                          <IconButton
                            component="a"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: "#1a73e8",
                              "&:hover": { color: "black" },
                            }}
                          >
                            {item.icon}
                          </IconButton>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "gray",
                              display: "block",
                              marginTop: "0.25rem",
                            }}
                          >
                            {item.name}
                          </Typography>
                        </Box>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Resources Section */}
        <Box sx={{ marginTop: "4rem", textAlign: "center" }}>
          <motion.h5
            gutterBottom
            sx={{ fontWeight: "bold", color: "black" }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Resources for Beginners
          </motion.h5>
          <Grid container justifyContent="center" spacing={2}>
            {[
              { name: "FreeCodeCamp", link: "https://www.freecodecamp.org/" },
              { name: "Codecademy", link: "https://www.codecademy.com/" },
              {
                name: "MDN Web Docs",
                link: "https://developer.mozilla.org/en-US/",
              },
              { name: "W3Schools", link: "https://www.w3schools.com/" },
            ].map((resource, idx) => (
              <Grid item key={idx}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      textTransform: "none",
                      padding: "0.5rem 1.5rem",
                      "&:hover": { backgroundColor: "#4F46E5", color: "#E0E7FF" },
                    }}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.name}
                  </Button>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Tips Section */}
        <Box sx={{ marginTop: "4rem", textAlign: "center" }}>
          <motion.h5
            gutterBottom
            sx={{ fontWeight: "bold", color: "black" }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Tips for Getting Started
          </motion.h5>
          <div className="text-center">
            <ul className="mt-8 space-y-3 ml-60 font-medium">
              {[
                "Start with the basics: Choose a programming language and master the fundamentals.",
                "Practice coding every day: Regular practice helps reinforce learning.",
                "Build projects: Apply what you learn by creating your own projects.",
                "Join coding communities: Engage with others to ask questions and share knowledge.",
              ].map((tip, idx) => (
                <motion.li
                  key={idx}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                  className="flex items-start lg:col-span-1"
                >
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 leading-5 text-gray-600">{tip}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </Box>
      </Container>

      <div className="relative bg-violet-600">
        <div className="absolute inset-x-0 top-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"
              transform="scale(1, -1) translate(0, -12)"
            ></path>
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <motion.h2
              className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Join Our Community
            </motion.h2>
            <motion.p
              className="mb-4 text-base text-white md:text-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Connect with fellow tech enthusiasts, get support, and share your
              projects.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "none",
                  padding: "0.5rem 2rem",
                  "&:hover": { backgroundColor: "#4F46E5", color: "#E0E7FF" },
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechToolkits;
