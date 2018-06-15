/*
* +----------------------------------+
* | Software Engineer: Erick Rettozi |
* |                                  |
* | (C) 2018                         |
* +----------------------------------+
*/

const CronJob = require('node-cron');
const MyFTP = require('./MyFTP');
const MyCSV2Json = require('./MyCSV2Json');
const MyDB = require('./MyDB');
const log = new (require('./lib/log'))('./log/nodejs_job.log', {Console: false});
const fs = require('fs');
const db = new MyDB();
const csv2json = new MyCSV2Json();

/**
* Starts the cron-job to consume the CSV file from the FTP server, run the parser, and store the data in DB.
* @param cron-time
*/
const Job = CronJob.schedule('* * * * * *', function() {

	if(! fs.existsSync('./log'))
		fs.mkdirSync('./log');

        console.log('Start Job');
        log.info('CronJob','Start Job');

        console.log('Exec MyFTP.get()');
        log.info('CronJob','Exec MyFTP.get()');

        const ftp = new MyFTP();

        ftp.get(process.env.FTP_CSV_FILE)
        .then(ftpRes => {

                console.log('Exec MyCSV2Json.parser()');
        	log.info('CronJob','Exec MyCSV2Json.parser()');
                csv2json.parser(ftpRes.localFile)
                .then(csv2jsonRes => {

                        console.log('Exec myDB.save()');
        		log.info('CronJob','Exec myDB.save()');
                        db.save(csv2jsonRes)
                        .then(dbRes => {
                                console.log(dbRes);
        			log.info('CronJob','DB_RES[ %s ]',dbRes);
                        });
                });
        });


}, false);

module.exports = Job;
