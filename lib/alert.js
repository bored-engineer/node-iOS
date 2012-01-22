//Require spwan from child processes
var spawn = require('child_process').spawn;
//Require join from path
var join = require('path').join;

var alert = function(options, callback){
	//The args builds the arguments
	var args = [];

	//If header
	if(options.header){
		args.push("-t");
		args.push(options.header);
	}
	//If message
	if(options.message){
		args.push("-m");
		args.push(options.message);
	}
	//If defaultButton
	if(options.defaultButton){
		args.push("-d");
		args.push(options.defaultButton);
	}
	//If alternateButton
	if(options.alternateButton){
		args.push("-a");
		args.push(options.alternateButton);
	}
	//If alternateButton
	if(options.otherButton){
		args.push("-o");
		args.push(options.otherButton);
	}
	//If timeout
	if(options.timeout){
		args.push("-t");
		args.push(options.timeout);
	}

	//Spawn the process
	sbalert = spawn(join(__dirname, '..', 'compiled', 'sbalert'), args);
	
	//Save the stdout to here
	var stdout = "";
	//On stdout
	sbalert.stdout.on('data', function (data) {
		//Save to stdout variable
  		stdout += data;
	});
	
	//On done
	sbalert.on('exit', function (code) {
		//Check if successful
		if(code != 0){
			//Create a new error for result
			var err = new Error(code);
		}else{
			//No error
			var err = false;
		}
		//Call the callback with the parsed result and error
  		callback(err, parseInt(stdout));
	});
}

module.exports = alert;