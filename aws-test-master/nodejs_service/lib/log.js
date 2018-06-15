/*
* lib/log.js
*
* +----------------------------------+ 
* | Software Engineer: Erick Rettozi |
* |				     |
* | (C) 2018                         |
* +----------------------------------+
*
*/

'use strict';

const thorden = require('thorden');

const Log = function(file = null, property = null) {
	try {
		let transports = {
                        Transports: {
                                File: {
                                        filename: file,
                                        colorize: true,
                                        datePattern: false
                                }
                        }
		};

		// Set Console property
		if(typeof property == 'object' && typeof property.Console != null && property.Console)
			transports.Transports.Console = { colorize:true };

		return new thorden.Logger(transports);
	} catch(err) {
		return new Error(err);
	}
}

module.exports = Log;
