//Setup the empty iOS variable
var iOS = {}

//Alert
iOS.alert = require("./alert.js");

//Lock
iOS.lock = require("./lock.js");

//Bundles
iOS.bundles = require("./bundles.js");

//Device
iOS.device = require("./device.js");

//Launch
iOS.launch = require("./launch.js");

//URL
iOS.urls = require("./urls.js");

//URL
iOS.quit = require("./quit.js");

//Expose the methods
module.exports = iOS;