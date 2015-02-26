// Write a program that accepts one or more numbers as command-line arguments and 
// prints the sum of those numbers to the console (stdout).

var argv = process.argv;
var sum = 0;

for (var i = 2; i < argv.length; i++) {
	sum += Number(argv[i]);
}

console.log(sum);
