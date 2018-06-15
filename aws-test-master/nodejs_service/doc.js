/*
* +----------------------------------+
* | Software Engineer: Erick Rettozi |
* |                                  |
* | (C) 2018                         |
* +----------------------------------+
*
* Set schema and RESTful model
*/

const restful = require('node-restful');
const mongoose = restful.mongoose;
const albumsSchema = require('./schemaDB')(mongoose);

module.exports = restful.model('Albums', albumsSchema);
