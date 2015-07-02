socket = io();

$("#btnTest").on('click', function () {
	socket.emit("clientEvent", {"hello": "world"});
});
