/*
* +----------------------------------+
* | Software Engineer: Erick Rettozi |
* |                                  |
* | (C) 2018                         |
* +----------------------------------+
*
* Sets API options and methods
*/

const Doc = require('./doc');

//Doc.methods(['get','post','put','delete']);
Doc.methods(['get']);

Doc.updateOptions({new: true, runValidators: true});

module.exports = Doc;
