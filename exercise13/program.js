var fs = require('fs');
var http = require('http');
var url = require('url');

var port = parseInt(process.argv[2]);

var server = http.createServer(function(req, res) { 
	var parsedUrl = url.parse(req.url, true);
	if (parsedUrl.pathname == "/api/parsetime") {
		res.writeHead(200, {"Content-Type" : "application/json"})
		var d = new Date(parsedUrl.query.iso);
		var jsonDate = {
			hour: d.getHours(),
			minute: d.getMinutes(),
			second: d.getSeconds()
		};
		res.end(JSON.stringify(jsonDate));
	} else if (parsedUrl.pathname == "/api/unixtime") {
		res.writeHead(200, {"Content-Type" : "application/json"});

		var targetTime = new Date(parsedUrl.query.iso);
		var jsonTime = {
			unixtime : targetTime.getTime() 
		}

		res.end(JSON.stringify(jsonTime));
	} else { 
		res.writeHead(404);
		res.end();
	}
});

server.listen("" + port);