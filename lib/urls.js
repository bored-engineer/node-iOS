//Require exec from child processes
var exec = require('child_process').exec;
//Require spwan from child processes
var spawn = require('child_process').spawn;
//Require join from path
var join = require('path').join;

var urls = {};

//Get the urls
urls.list = function(cb){
	exec(join(__dirname, '..', 'compiled', 'sburlschemes'), function (error, stdout, stderr) {
    	//Get the ids
		var ids = stdout.split("\n");
	
		//Pop the empty last one
		ids.pop();
    	
    	cb(error, ids);
	});
}

//Open url
urls.open = function(url, cb){
	//Spawn the process
	sbalert = spawn(join(__dirname, '..', 'compiled', 'sbopenurl'), [url]);
	//On exit
	sbalert.on('exit', function (code) {
		//Call the callback with the parsed result and error
  		cb(code);
	});
}

module.exports = urls;