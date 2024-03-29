// Write a program that uses a single asynchronous filesystem operation to read a file and 
// print the number of newlines it contains to the console (stdout), similar to 
// running cat file | wc -l.
// 
// The full path to the file to read will be provided as the first command-line argument.

var fs = require('fs');
var argv = process.argv;

var lines = fs.readFile(argv[2], function(error, data) {
	if (error) {
		throw error;
	} else {
		var lineCount = data.toString().split('\n').length - 1;
		console.log(lineCount);
	}
});
