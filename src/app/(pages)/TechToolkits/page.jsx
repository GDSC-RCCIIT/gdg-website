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

const TechToolkits = () => {
  return (
    <>
    <Container maxWidth="lg" sx={{ padding: "2rem" }}>
      <div className="text-center mb-8">
        <motion.h1
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tech Toolkits HUB
        </motion.h1>

        <motion.p
          className="text-gray-600 text-xl mt-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the essential tools and technologies for web development,
          programming, and cloud platforms.
        </motion.p>
      </div>

      <Grid container spacing={4} justifyContent="center">
        {techStacks.map((stack, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                },
              }}
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
          </Grid>
        ))}
      </Grid>

      {/* Resources Section */}
      <Box sx={{ marginTop: "4rem", textAlign: "center" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", color: "black" }}
        >
          Resources for Beginners
        </Typography>
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
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Tips Section */}
      <Box sx={{ marginTop: "4rem", textAlign: "center" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", color: "black" }}
        >
          Tips for Getting Started
        </Typography>
        <div className="text-center">
          <ul class="mt-8 space-y-3 ml-60 font-medium">
            {[
              "Start with the basics: Choose a programming language and master the fundamentals.",
              "Practice coding every day: Regular practice helps reinforce learning.",
              "Build projects: Apply what you learn by creating your own projects.",
              "Join coding communities: Engage with others to ask questions and share knowledge.",
            ].map((tip, idx) => (
              <li key={idx} class="flex items-start lg:col-span-1">
                <div class="flex-shrink-0">
                  <svg
                    class="w-5 h-5 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p class="ml-3 leading-5 text-gray-600">{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </Box>
    </Container>

        <div class="relative bg-violet-600">
          <div class="absolute inset-x-0 top-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              class="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"
                transform="scale(1, -1) translate(0, -12)"
              ></path>
            </svg>
          </div>
          <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
              <h2 class="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Join Our Community
              </h2>
              <p class="mb-6 text-base text-indigo-200 md:text-lg">
                Join us on this exciting adventure of learning and grabbing new opportunities every  time you meet a person. 
                Each of us is here to learn, network and grow. So what's stopping you!!! Come on in !!!
              </p>
              <Grid container justifyContent="center" spacing={2}>
          {[
            { name: "Stack Overflow", link: "https://stackoverflow.com/" },
            {
              name: "r/learnprogramming",
              link: "https://www.reddit.com/r/learnprogramming/",
            },
            { name: "Dev.to", link: "https://dev.to/" },
          ].map((community, idx) => (
            <Grid item key={idx}>
              <Button
                variant="outline"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "none",
                  padding: "0.5rem 1.5rem",
                  "&:hover": { backgroundColor: "black", color: "white" },
                }}
                href={community.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {community.name}
              </Button>
            </Grid>
          ))}
        </Grid>
              
            </div>
          </div>
        </div>
    </>
  );
};

export default TechToolkits;
