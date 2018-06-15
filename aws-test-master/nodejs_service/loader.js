/*
* +----------------------------------+
* | Software Engineer: Erick Rettozi |
* |                                  |
* | (C) 2018                         |
* +----------------------------------+
*
* Service Initialize
*/

const log = new (require('./lib/log'))('./log/nodejs_service.log', {Console: false});
const fs = require('fs');

const server = require('./server');
require('./db');
require('./routes')(server);

if(! fs.existsSync('./log'))
	fs.mkdirSync('./log');

log.info('NodeService','Loader!');

log.destroy();
