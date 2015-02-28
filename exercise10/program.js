var net = require('net');
var strftime = require('strftime')
var port = parseInt(process.argv[2]);

var server = net.createServer(function(socket) { // socket is a Node duplex stream
	var date = new Date();
	var dateString = strftime("%Y-%m-%d %H:%M");
	socket.write(dateString);
	socket.close();
});
server.listen("" + port);