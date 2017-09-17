const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public/src');

const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);

//Websockets server
let io = socketIO(server);

//Serving public files (Frontend) 
app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log(`New user connection ${socket}`);
});

io.on('disconnect', () => {
	console.log(`User disconnected`);
});

server.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
	console.log(publicPath);
});