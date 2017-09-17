var socket = io();

socket.on('connect', function(){
	console.log('Connected to server...');

	talkToServer(socket, 'userJoined', {from: 'jon@example.com', text: 'Joined'});
	
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

	        break;

	    case 'userJoined':
	        
	        break;

	    default:
	        console.log('Event error happened!');
	}
	socket.emit(event, data);

}
