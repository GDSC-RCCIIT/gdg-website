"use client";
import { useEffect, useRef, useState } from 'react';
import { Container, TextField, Button, Paper, Box, List, ListItem, ListItemText, Divider, IconButton, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GeminiAI() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState(() => {
        const savedHistory = localStorage.getItem('chatHistory');
        return savedHistory ? JSON.parse(savedHistory) : [];
    });
    const chatContainerRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const formatMessage = (text) => {
        const messageText = typeof text === 'string' ? text : '';
        const regex = /```(.*?)```/gs;

        return messageText.split(regex).map((part, index) =>
            index % 2 === 1 ? (
                <Box key={index} sx={{ position: 'relative', marginBottom: '1rem' }}>
                    <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f4f4f4', padding: '0.5rem', borderRadius: '5px' }}>
                        <code>{part}</code>
                    </pre>
                    <IconButton
                        onClick={() => {
                            navigator.clipboard.writeText(part);
                            toast.success("Copied Successfully");
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
        setChatHistory((prev) => [...prev, userMessage]);
        setUserInput("");

        try {
            const previousMessages = chatHistory.map(msg => msg.text).join("\n");
            const res = await fetch('/api/generate-content', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: "Previous Responses By You: " + previousMessages + "\nMy New Query: " + userInput
                }),
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

    const handleClearChat = () => {
        setChatHistory([]);
        localStorage.removeItem('chatHistory');
    };

    return (
        <Container style={{ marginTop: '6rem', marginBottom: '2rem' }}>
            <Paper elevation={3} style={{ padding: '1.5rem', borderRadius: '8px' }}>
                <h1 className="m-2 text-5xl text-center font-extrabold bg-blue-500  text-transparent bg-clip-text">
                    Gemini AI Chat
                </h1>
                <Box
                    ref={chatContainerRef}
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
                <Stack direction="row" spacing={2} style={{ marginTop: '1rem' }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type a message..."
                        style={{ backgroundColor: 'white', borderRadius: '4px' }}
                    />
                    <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />} onClick={handleSubmit}>
                        Send
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleClearChat}>
                        Clear
                    </Button>
                </Stack>
            </Paper>
            <ToastContainer />
        </Container>
    );
}
