//Require exec from child processes
var exec = require('child_process').exec;
//Require join from path
var join = require('path').join;

//Quit
var quit = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbquit'), function (error, stdout, stderr) {
    	cb(error);
	});
}

module.exports = quit;