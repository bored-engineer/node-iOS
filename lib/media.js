//Require exec from child processes
var exec = require('child_process').exec;
//Require spwan from child processes
var spawn = require('child_process').spawn;
//Require join from path
var join = require('path').join;

var media = {};

media.toggle = function(cb){
        exec(join(__dirname, '..', 'compiled','sbmedia')+" -t", function (error, stdout, stderr) {
                //callback
	        cb(error);
        });
}

media.prev = function(cb){
        exec(join(__dirname, '..', 'compiled','sbmedia')+" -p", function (error, stdout, stderr) {
                //callback
                cb(error);
        });
}

media.next = function(cb){
        exec(join(__dirname, '..', 'compiled','sbmedia')+" -n", function (error, stdout, stderr) {
                //callback
                cb(error);
        });
}

module.exports = media;
