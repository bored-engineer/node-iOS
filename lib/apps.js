//Require exec from child processes
var exec = require('child_process').exec;
//Require spwan from child processes
var spawn = require('child_process').spawn;
//Require join from path
var join = require('path').join;

var apps = {};

//Get the ids
apps.listIds = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbbundleids'), function (error, stdout, stderr) {
    	//Get the ids
		var ids = stdout.split("\n");
	
		//Pop the empty last one
		ids.pop();
		
		//callback
    	cb(error, ids);
	});
}

apps.listUrls = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sburlschemes'), function (error, stdout, stderr) {
    	//Get the ids
		var ids = stdout.split("\n");
	
		//Pop the empty last one
		ids.pop();
    	
    	cb(error, ids);
	});
}

apps.openUrl = function(url, cb){
	//Spawn the process
	sbalert = spawn(join(__dirname, '..', 'compiled', 'sbopenurl'), [url]);
	//On exit
	sbalert.on('exit', function (code) {
		//Call the callback with the parsed result and error
  		cb(code);
	});
}

apps.launch = function(options, cb){
	//The args builds the arguments
	var args = ["-p"];
	
	if(options.debugging == true){
		args.push("-d");
	}
	
	if(options.background == true){
		args.push("-b");
	}
	
	args.push(options.bundle);
	
	//Spawn the process
	sblaunch = spawn(join(__dirname, '..', 'compiled', 'sblaunch'), args);
	
	//Save the stdout to here
	var stdout = "";
	//On stdout
	sblaunch.stdout.on('data', function (data) {
		//Save to stdout variable
  		stdout += data;
	});
	
	//On done
	sblaunch.on('exit', function (error) {
		//Call the callback with the parsed result and error
  		cb(error, parseInt(stdout));
	});
	
});

apps.quitTop = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbquit'), function (error, stdout, stderr) {
    	cb(error);
	});
}

module.exports = apps;