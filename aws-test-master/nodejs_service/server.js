/*
* +----------------------------------+
* | Software Engineer: Erick Rettozi |
* |                                  |
* | (C) 2018                         |
* +----------------------------------+
*
* Server start
*/

const log = new (require('./lib/log'))('./log/nodejs_service.log', {Console: false});
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

const port = process.env.PORT || 3000;

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

server.listen(port, () => {
	console.log('Listening on port: %s',port);
	log.info('NodeService','Listening on port: %s',port);
	log.destroy();
});

module.exports = server;
