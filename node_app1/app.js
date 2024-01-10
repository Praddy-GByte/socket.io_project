const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + './index.html'));

io.on('connection', (socket) => {
    console.log(`User connected to Server ${serverPort}`);

    socket.on('message', (message) => {
        console.log(`Received message from Server ${serverPort}:`, message);
        io.emit('message', message); // Broadcast the message to all connected clients, including the sender
    });
});

server.listen(3000, () => {
    console.log('Server 1 is running on port 3000');
});
