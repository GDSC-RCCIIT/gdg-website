"use client";
import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { motion } from 'framer-motion';
import blogs from './Blogs';

const BlogPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const filteredBlogs = blogs
        .filter((blog) => blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.description.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            if (sortOrder === 'asc') {
                return titleA < titleB ? -1 : 1;
            } else {
                return titleA > titleB ? -1 : 1;
            }
        });

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 py-8">
            <Container maxWidth="lg" className="px-6">
                <motion.h1
                    className="text-5xl text-center font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text p-5 mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Explore Our Latest Blogs
                </motion.h1>

                <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
                    <TextField
                        label="Search Blogs"
                        variant="outlined"
                        fullWidth
                        className="mr-4"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            className: 'rounded-xl'
                        }}
                    />
                    <FormControl variant="outlined" className="w-full sm:w-48">
                        <InputLabel>Sort By</InputLabel>
                        <Select
                            label="Sort By"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            labelId="sort-label"
                            className="rounded-xl"
                        >
                            <MenuItem value="asc">Alphabetical (A-Z)</MenuItem>
                            <MenuItem value="desc">Alphabetical (Z-A)</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBlogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * blog.id }}
                        >
                            <Card className="bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                                <CardContent className="p-6 flex-grow">
                                    <Typography variant="h5" className="text-2xl font-semibold text-gray-800">
                                        {blog.title}
                                    </Typography>
                                    <Typography variant="body2" className="text-gray-600 mt-2">
                                        {blog.description}
                                    </Typography>
                                    <div className="mt-4 text-sm text-gray-500">
                                        <p>{`By ${blog.author} | ${blog.date}`}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default BlogPage;
