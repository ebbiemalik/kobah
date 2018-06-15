/*
* +----------------------------------+
* | Software Engineer: Erick Rettozi |
* |                                  |
* | (C) 2018                         |
* +----------------------------------+
*/

const Promise = require('bluebird');
const mongoose = require('mongoose');
const albumsSchema = require('./schemaDB')(mongoose);

function MyDB() {}

/**
* Saves album data to MongoDB database.
* @param ArrayOfObjects
* @returns {Promise.<*>}
*/
MyDB.prototype.save = function(arrayOfObjects) {

	const self = this;

	return new Promise((resolve,reject) => {

		try {
			mongoose.connect(process.env.MONGO_URI);
			let Albums = mongoose.model('Albums', albumsSchema);

			for(let i = 0; i < arrayOfObjects.length; i++) {

				Albums.findOne({ album: arrayOfObjects[i].album }, (err, doc) => {
				    const data = (doc) ? Object.assign(doc, arrayOfObjects[i]) : new Albums(arrayOfObjects[i]);

				    data.save((saveErr, saveAlbum) => {
					mongoose.disconnect();

				        if (saveErr) reject(saveErr);

					resolve('The data was saved to the database successfully! : ' + saveAlbum);
				    });
				});
			}

		} catch(e) {
			reject(e);
		}

	});
}

module.exports = MyDB;
