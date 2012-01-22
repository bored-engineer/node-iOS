//Require exec from child processes
var exec = require('child_process').exec;
//Require join from path
var join = require('path').join;

//Lock the device
var lock = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sblock'), function (error, stdout, stderr) {
    	cb(error);
	});
}

module.exports = lock;