var fs = require('fs');
var http = require('http');
var port = parseInt(process.argv[2]);
var fileName = process.argv[3];

var server = http.createServer(function(req, res) { // socket is a Node duplex stream
	var fileStream = fs.createReadStream(fileName);
	fileStream.pipe(res);
});
server.listen("" + port);