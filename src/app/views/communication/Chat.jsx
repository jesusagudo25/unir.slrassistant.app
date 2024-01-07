import * as React from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Avatar,
    Grid,
    Paper,
    styled,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { List, Stack } from '@mui/material';
import { Breadcrumb } from 'app/theme';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';

import { H5 } from 'app/theme/Typography';
import { Divider } from '@mui/material';
import Card from '@mui/material/Card';



const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}));

const CardHeader = styled(Box)(() => ({
    display: 'flex',
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const messages = [
    { id: 1, text: "Hi there!", sender: "bot" },
    { id: 2, text: "Hello!", sender: "user" },
    { id: 3, text: "How can I assist you today?", sender: "bot" },
    { id: 4, text: "I need help with my order", sender: "user" },
    { id: 5, text: "Ok, let me check that for you", sender: "bot" },
    { id: 6, text: "Thank you", sender: "user" },
    { id: 7, text: "Your order is on the way", sender: "bot" },
    { id: 8, text: "Thank you", sender: "user" },
    { id: 9, text: "You are welcome", sender: "bot" },
    { id: 10, text: "Good bye", sender: "user" },
    { id: 11, text: "Bye", sender: "bot" },
];

const Chat = () => {
    const [input, setInput] = React.useState("");

    const handleSend = () => {
        if (input.trim() !== "") {
            console.log(input);
            setInput("");
        }
    };

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: 'Projects', path: '/projects' }, { name: 'Chat' }]} />
            </Box>

            <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
                <CardHeader>
                    <Title>Chat</Title>

                </CardHeader>
                <Divider />
                <Box sx={{ p: 3 }}>
                    <Box
                        sx={{
                            height: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            bgcolor: "#f4f6f8",
                            borderRadius: "10px",
                        }}
                    >
                        <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
                            {messages.map((message) => (
                                <Message key={message.id} message={message} />
                            ))}
                        </Box>
                        <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={10}>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        placeholder="Type a message"
                                        variant="outlined"
                                        value={input}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Button
                                        fullWidth
                                        color="primary"
                                        variant="contained"
                                        endIcon={<SendIcon />}
                                        onClick={handleSend}
                                    >
                                        Send
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Card>


        </Container>
    );
};

const Message = ({ message }) => {
    const isBot = message.sender === "bot";

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: isBot ? "flex-start" : "flex-end",
                mb: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isBot ? "row" : "row-reverse",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ bgcolor: isBot ? "primary.main" : "secondary.main" }}>
                    {isBot ? "B" : "U"}
                </Avatar>
                <Paper
                    variant="outlined"
                    sx={{
                        p: 2,
                        ml: isBot ? 1 : 0,
                        mr: isBot ? 0 : 1,
                        backgroundColor: isBot ? "primary.light" : "secondary.light",
                        borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
                    }}
                >
                    <Typography variant="body1">{message.text}</Typography>
                </Paper>
            </Box>
        </Box>
    );
};

export default Chat;