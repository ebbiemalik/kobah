/*
* +----------------------------------+
* | Software Engineer: Erick Rettozi |
* |                                  |
* | (C) 2018                         |
* +----------------------------------+
*/

/**
* Albums Schema
* @param mongoose Object
* @returns schema Object
*/
module.exports = function(mongoose) {

	return new mongoose.Schema({

	    album: {type: String, required: true},
	    year: String,
	    US_peak_chart_post: String

	},{collection: 'albums_list'});

}
