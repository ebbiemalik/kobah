/*
* +----------------------------------+
* | Software Engineer: Erick Rettozi |
* |                                  |
* | (C) 2018                         |
* +----------------------------------+
*
* Register routes
*/

const express = require('express');

module.exports = function(server) {

    const router = express.Router();
    server.use('/api', router);

    const docService = require('./docService.js');
    docService.register(router,'/albums');

}
