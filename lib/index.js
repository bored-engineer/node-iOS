//Setup the empty iOS variable
var iOS = {}

//Notify
iOS.notify = require("./notify.js");

//Apps
iOS.apps = require("./apps.js");

//Device
iOS.device = require("./device.js");


//Expose the methods
module.exports = iOS;