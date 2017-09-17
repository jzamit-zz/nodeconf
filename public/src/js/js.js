var socket = io();

socket.on('connect', function(){
	console.log('Connected to server...');
	talkToServer(socket, 'createMessage', {to: 'jon@example.com', body: 'Some message'});
	
});

socket.on('disconnect', function(){
	console.log('Disconnected from server...');
});

socket.on('disconnect', function(){
	console.log('Disconnected from server...');
});

socket.on('newMessage', function(data) {
	console.log('newMessage '+ JSON.stringify(data));
 });

function talkToServer(socket, event, data){

	if(!socket || socket === null || !event || !data) {
		console.log('Some error happend!');
		return;
	}

	switch(event) {

	    case 'createMessage':
	        socket.emit('createMessage', data);

	        break;

	    case n:
	        
	        break;

	    default:
	        console.log('Event error happened!');
	}
}
