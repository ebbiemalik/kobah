/*
* +----------------------------------+
* | Software Engineer: Erick Rettozi |
* |                                  |
* | (C) 2018                         |
* +----------------------------------+
*/

const csv = require('csvtojson');
const Promise = require('bluebird');

function MyCSV2Json() {}

/**
* Parser CSV file.
* @param csvfile
* @returns {Promise.<*>}
*/
MyCSV2Json.prototype.parser = function(file) {

	return new Promise((resolve,reject) => {

		let res = [];

		csv()
		.fromFile(file)
		.on('json',(jsonObj)=>{
			res.push(jsonObj);
		})
		.on('done',(error)=>{
		    if(error) reject(error);

		    resolve(res);
		});
	});
}

module.exports = MyCSV2Json;
