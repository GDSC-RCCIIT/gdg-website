"use client";
import { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GeminiAI() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const formatMessage = (text) => {
        const regex = /```(.*?)```/gs;

        return text.split(regex).map((part, index) =>
            index % 2 === 1 ? (
                <Box key={index} sx={{ position: 'relative', marginBottom: '1rem' }}>
                    <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f4f4f4', padding: '0.5rem', borderRadius: '5px' }}>
                        <code>{part}</code>
                    </pre>
                    <IconButton
                        onClick={() => {
                            navigator.clipboard.writeText(part);
                            toast.success("Copied Successfully"); // Show success toast
                        }}
                        size="small"
                        color="primary"
                        style={{
                            position: 'absolute',
                            top: '0.5rem',
                            right: '0.5rem',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                        }}
                    >
                        <ContentCopyIcon fontSize="small" />
                    </IconButton>
                </Box>
            ) : (
                <span key={index}>{part}</span>
            )
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userInput) return;

        const userMessage = { sender: "User", text: userInput };
        setChatHistory([...chatHistory, userMessage]);
        setUserInput("");

        try {
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: userInput }),
            });

            if (!res.ok) {
                throw new Error(`Server error: ${res.statusText}`);
            }

            const data = await res.json();
            const botMessage = { sender: "Gemini AI", text: data.generatedText };
            setChatHistory((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Container style={{ marginTop: '6rem', marginBottom: '2rem' }}>
            <Paper elevation={3} style={{ padding: '1.5rem', borderRadius: '8px' }}>
                <h1 className="m-2 text-5xl text-center font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Gemini AI Chat
                </h1>
                <Box
                    style={{
                        height: '60vh',
                        overflowY: 'auto',
                        padding: '1rem',
                        backgroundColor: '#f1f1f1',
                        borderRadius: '8px',
                        marginBottom: '1rem',
                    }}
                >
                    <List>
                        {chatHistory.map((msg, index) => (
                            <ListItem
                                key={index}
                                alignItems="flex-start"
                                style={{
                                    display: 'flex',
                                    justifyContent: msg.sender === "User" ? 'flex-end' : 'flex-start',
                                }}
                            >
                                <Paper
                                    elevation={1}
                                    style={{
                                        padding: '0.01rem 1rem',
                                        borderRadius: '5px',
                                        backgroundColor: msg.sender === "User" ? '#1976d2' : '#e0e0e0',
                                        color: msg.sender === "User" ? 'white' : 'black',
                                        maxWidth: '70%',
                                    }}
                                >
                                    <ListItemText
                                        primary={formatMessage(msg.text)}
                                        secondary={msg.sender === "User" ? "" : msg.sender}
                                        secondaryTypographyProps={{
                                            style: { color: msg.sender === "User" ? '#bbdefb' : '#757575' },
                                        }}
                                    />
                                </Paper>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider />
                <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type a message..."
                        style={{ marginRight: '1rem', backgroundColor: 'white', borderRadius: '4px' }}
                    />
                    <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}
