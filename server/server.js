const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public/src');

const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);

//Websockets server
let io = socketIO(server);

//Serving public files (Frontend) 
app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log(`New user connection`);

	socket.emit('newMessage', generateMessage('Admin', 'Welcome the this chat'));

	socket.on('userJoined', (data) => {
		console.log(JSON.stringify(data));

		//used brodcast to send to everyone excepts the one who sends the message
		socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

	});
	
	socket.on('createMessage', (message, callback) => {
		console.log(`Created message ${JSON.stringify(message)}`);

		//Emit event to all connections
		io.emit('newMessage', generateMessage(message.from, message.text));
		callback('This is from the server');

	});

	//Emit event to a single connection
	/*socket.emit('newMessage', {from:'Jason', text: 'Hi Tom!'});
*/
	socket.on('disconnect', () => {
		console.log(`User disconnected`);
	});
});



server.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
	
});

