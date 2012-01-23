//Setup the empty iOS variable
var iOS = {}

//Alert
iOS.alert = require("./alert.js");

//Lock
iOS.lock = require("./lock.js");

//Apps
iOS.apps = require("./apps.js");

//Device
iOS.device = require("./device.js");

//URL
iOS.urls = require("./urls.js");

//Expose the methods
module.exports = iOS;