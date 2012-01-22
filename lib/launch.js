//Require spwan from child processes
var spawn = require('child_process').spawn;
//Require join from path
var join = require('path').join;

//Lock the device
var launch = function(options, cb){
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

}

module.exports = launch;