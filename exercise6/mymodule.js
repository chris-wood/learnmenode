var fs = require('fs');
var path = require('path');

var readDirectory = function(directory, fileExtensionFilter, callback) {
	fs.readdir(directory, function(error, files) {
		if (error) {
			callback(error, null);
		} else {
			var matchingFiles = [];
			for (var i = 0; i < files.length; i++) {
				var fileName = files[i];
				var fileExtension = path.extname(fileName);
				if (fileExtension.substring(1) == fileExtensionFilter) {
					matchingFiles.push(fileName);
				}
			}
			callback(null, matchingFiles);
		}
	});	
}

module.exports = readDirectory;