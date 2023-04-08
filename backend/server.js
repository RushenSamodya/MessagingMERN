const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');

const app = express();
dotenv.config();

PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('API is running...');
} );

app.get('/api/chat', (req, res) => {
    res.send(chats);
} );

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
} );

app.listen(PORT, console.log(`server started on port ${PORT}`));