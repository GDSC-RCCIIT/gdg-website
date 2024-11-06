"use client";
import React from 'react';
import { Container, Card, Typography, Box, Chip } from '@mui/material';
import blogs from '../Blogs';

const SingleBlogPage = ({ params }) => {
    const { id } = params;
    const blog = blogs.find((blog) => blog.id.toString() === id);

    if (!blog) {
        return (
            <Container>
                <Typography variant="h4" gutterBottom>
                    Blog not found
                </Typography>
            </Container>
        );
    }

    return (
        <div className="min-h-screen py-8">
            <Container maxWidth="lg" className="px-6">
                <Card className="bg-white shadow-lg rounded-2xl p-6 overflow-hidden">
                    <Box
                        component="img"
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-64 object-cover rounded-t-2xl mb-4"
                    />
                    <Typography variant="h4" className="text-2xl font-semibold text-gray-800 mb-4">
                        {blog.title}
                    </Typography>
                    <Box display="flex" justifyContent="space-between" className="text-sm text-gray-500 mb-4">
                        <Typography>{`By ${blog.author}`}</Typography>
                        <Typography>{blog.date}</Typography>
                    </Box>
                    <Typography
                        variant="body1"
                        className="text-gray-700 mt-2 blog-content"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                    <Box className="mt-6">
                        <Typography variant="subtitle1" className="text-gray-600 mb-2">
                            Tags:
                        </Typography>
                        {blog.tags.map((tag, index) => (
                            <Chip
                                key={index}
                                label={tag}
                                variant="outlined"
                                className="mr-2 mb-2"
                                color="primary"
                            />
                        ))}
                    </Box>
                </Card>
            </Container>
        </div>
    );
};

export default SingleBlogPage;
