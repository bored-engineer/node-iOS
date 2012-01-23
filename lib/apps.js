//Require exec from child processes
var exec = require('child_process').exec;
//Require join from path
var join = require('path').join;

var apps = {};

//Get the ids
apps.list = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbbundleids'), function (error, stdout, stderr) {
    	//Get the ids
		var ids = stdout.split("\n");
	
		//Pop the empty last one
		ids.pop();
		
		//callback
    	cb(error, ids);
	});
}


module.exports = apps;