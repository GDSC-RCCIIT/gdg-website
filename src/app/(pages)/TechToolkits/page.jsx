"use client";
import React from 'react';
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
} from '@mui/material';

import techStacks from './techStacks';

const TechToolkits = () => {
    return (
        <Container maxWidth="lg" sx={{ padding: '2rem' }}>
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1a73e8' }}>
                Tech Toolkits HUB
            </Typography>
            <Typography variant="h6" align="center" paragraph sx={{ color: '#5f6368' }}>
                Explore the essential tools and technologies for web development, programming, and cloud platforms.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {techStacks.map((stack, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card
                            variant="outlined"
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                padding: '1rem',
                                backgroundColor: '#f9f9f9',
                                boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                                },
                            }}
                        >
                            <CardHeader
                                title={stack.title}
                                titleTypographyProps={{ align: 'center', fontWeight: 'bold', fontSize: '1.25rem', color: '#3c4043' }}
                            />
                            <CardContent>
                                <Grid container justifyContent="center">
                                    {stack.icons.map((item, idx) => (
                                        <IconButton
                                            key={idx}
                                            component="a"
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                color: '#1a73e8',
                                                margin: '0.5rem',
                                                '&:hover': { color: '#ea4335' },
                                            }}
                                        >
                                            {item.icon}
                                        </IconButton>
                                    ))}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Resources Section */}
            <Box sx={{ marginTop: '4rem', textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1a73e8' }}>
                    Resources for Beginners
                </Typography>
                <Grid container justifyContent="center" spacing={2}>
                    {[
                        { name: 'FreeCodeCamp', link: 'https://www.freecodecamp.org/' },
                        { name: 'Codecademy', link: 'https://www.codecademy.com/' },
                        { name: 'MDN Web Docs', link: 'https://developer.mozilla.org/en-US/' },
                        { name: 'W3Schools', link: 'https://www.w3schools.com/' },
                    ].map((resource, idx) => (
                        <Grid item key={idx}>
                            <Button
                                variant="contained"
                                color="primary"
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    textTransform: 'none',
                                    padding: '0.5rem 1.5rem',
                                }}
                            >
                                {resource.name}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Tips Section */}
            <Box sx={{ marginTop: '4rem', textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1a73e8' }}>
                    Tips for Getting Started
                </Typography>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {['Start with the basics: Choose a programming language and master the fundamentals.',
                        'Practice coding every day: Regular practice helps reinforce learning.',
                        'Build projects: Apply what you learn by creating your own projects.',
                        'Join coding communities: Engage with others to ask questions and share knowledge.'
                    ].map((tip, idx) => (
                        <li key={idx}>
                            <Typography variant="body1" sx={{ marginBottom: '0.5rem', color: '#5f6368' }}>
                                {tip}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </Box>

            {/* Community Section */}
            <Box sx={{ marginTop: '4rem', textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1a73e8' }}>
                    Join Our Community
                </Typography>
                <Grid container justifyContent="center" spacing={2}>
                    {[
                        { name: 'Stack Overflow', link: 'https://stackoverflow.com/' },
                        { name: 'r/learnprogramming', link: 'https://www.reddit.com/r/learnprogramming/' },
                        { name: 'Dev.to', link: 'https://dev.to/' },
                    ].map((community, idx) => (
                        <Grid item key={idx}>
                            <Button
                                variant="contained"
                                color="primary"
                                href={community.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    textTransform: 'none',
                                    padding: '0.5rem 1.5rem',
                                }}
                            >
                                {community.name}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default TechToolkits;

