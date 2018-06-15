/*
* +----------------------------------+
* | Software Engineer: Erick Rettozi |
* |                                  |
* | (C) 2018                         |
* +----------------------------------+
*/

const FTPClient = require('ftp');
const fs = require('fs');
const Promise = require('bluebird');

function MyFTP() {}

/**
* Download CSV file containing the album data.
* @param csvfile
* @returns {Promise.<*>}
*/
MyFTP.prototype.get = async function(file) {

	const tmpFile = '/tmp/' + file;

        const client = new FTPClient();

        client.connect( { host:process.env.FTP_HOST,
                          port:process.env.FTP_PORT,
                          user:process.env.FTP_USER,
                          password:process.env.FTP_PASS,
                          connTimeout: 50000 } );


	return await new Promise(resolve => {
		client.on('ready', function() {
		    client.get(file, function(err, stream) {
		      if (err) throw err;
		      stream.once('close', function() { client.end(); });
		      stream.pipe(fs.createWriteStream(tmpFile));
		      resolve({
			localFile: tmpFile
		      });
		    });
		});
	});

}

module.exports = MyFTP;
