var mymodule = require('./mymodule.js');
var argv = process.argv;

// args = [node, program, ...]
var directory = argv[2]; 
var extension = argv[3]; 

// mymodule exported a single function, so it *is* a function... invoke it as such 
mymodule(directory, extension, function(err, data) {
	for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
	}
})

