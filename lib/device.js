//Require exec from child processes
var exec = require('child_process').exec;
//Require join from path
var join = require('path').join;

var device = {};

//Get the name
device.name = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbdevice') + " -n", function (error, stdout, stderr) {
    	//Trim the result
		stdout = stdout.replace(/\n\r/,"");
		//Callback
		cb(error, stdout);
	});
}


device.lock = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sblock'), function (error, stdout, stderr) {
    	cb(error);
	});
}

module.exports = device;