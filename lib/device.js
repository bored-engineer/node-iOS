//Require exec from child processes
var exec = require('child_process').exec;
//Require join from path
var join = require('path').join;

var device = {};

//Get the name
device.name = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbdevice') + " -n", function (error, stdout, stderr) {
    	//Trim the result
		stdout = stdout.replace(/\n/,"");
		//Callback
		cb(error, stdout);
	});
}

device.systemName = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbdevice') + " -N", function (error, stdout, stderr) {
    	//Trim the result
		stdout = stdout.replace(/\n/,"");
		//Callback
		cb(error, stdout);
	});
}

device.systemVersion = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbdevice') + " -V", function (error, stdout, stderr) {
    	//Trim the result
		stdout = stdout.replace(/\n/,"");
		//Callback
		cb(error, stdout);
	});
}

device.localizedModel = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbdevice') + " -m", function (error, stdout, stderr) {
    	//Trim the result
		stdout = stdout.replace(/\n/,"");
		//Callback
		cb(error, stdout);
	});
}

device.uuid = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbdevice') + " -u", function (error, stdout, stderr) {
    	//Trim the result
		stdout = stdout.replace(/\n/,"");
		//Callback
		cb(error, stdout);
	});
}

device.orientation = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbdevice') + " -o", function (error, stdout, stderr) {
    	//Trim the result
		stdout = stdout.replace(/\n/,"");
		//set number
		var num;
		switch(stdout){
			case "Portrait":
				num = 1;
			break; 
			case "PortraitUpsideDown":
				num = 2;
			break;
			case "LandscapeLeft":
				num = 3;
			break;
			case "LandscapeRight":
				num = 4;
			break;
			case "FaceUp":
				num = 5;
			break;
			case "FaceDown":
				num = 6;
			break;
			case "Unknown":
			default:
				num = 0;
			break;
		}
		
		//Callback
		cb(error, num);
	});
}

device.batteryLevel = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbdevice') + " -l", function (error, stdout, stderr) {
    	//Trim the result
		stdout = stdout.replace(/\n/,"");
		//Callback
		cb(error, parseFloat(stdout));
	});
}

device.batteryState = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbdevice') + " -s", function (error, stdout, stderr) {
    	//Trim the result
		stdout = stdout.replace(/\n/,"");
		//set number
		var num;
		switch(stdout){
			case "Full":
				num = 1;
			break; 
			case "Charging":
				num = 2;
			break;
			case "Unplugged":
				num = 3;
			break;
			case "Unknown":
			default:
				num = 0;
			break;
		}
		
		//Callback
		cb(error, num);
	});
}

device.proximityState = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbdevice') + " -p", function (error, stdout, stderr) {
    	//Trim the result
		stdout = stdout.replace(/\n/,"");
		
		//Callback
		cb(error, ((stdout == "YES") ? true : false));
	});
}

device.multitaskingSupported = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sbdevice') + " -e", function (error, stdout, stderr) {
    	//Trim the result
		stdout = stdout.replace(/\n/,"");
		
		//Callback
		cb(error, ((stdout == "YES") ? true : false));
	});
}

device.lock = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sblock'), function (error, stdout, stderr) {
    	if(cb){
    		cb(error);
    	}
	});
}

module.exports = device;