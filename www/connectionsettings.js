/*global cordova, module*/

var exec = require("cordova/exec")

/*
 * Format of the returned value:
 * {
 *    "connectUrl": "...",
 *    "isSkipAuth": true/false,
 *    "android": {
 *        "googleWebAppClientID": "...",
 *    },
 *    "ios": {
 *       "googleClientID": "...",
 *    }
 * }
 */

var ConnectionSettings = {
    getSettings: function () {
    	return new Promise(function(resolve, reject) {	
    		exec(resolve, reject, "ConnectionSettings", "getSettings", []);
    	});
    }
}

module.exports = ConnectionSettings;
