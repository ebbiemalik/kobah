#!/bin/bash

# +----------------------------------+ 
# | Software Engineer: Erick Rettozi |
# |                                  |
# | (C) 2018                         |
# +----------------------------------+
#
# Script executed before the server-ftp startup, to create the ftp user, give the user permissions, create -
# the directory structure in the user's home and copy the albums.csv file to the home.

if [ ! -d /home/ftpusers/${FTP_USER} ] ; then

	echo -e "Set password for user '${FTP_USER}'\n"

	( echo ${FTP_PASS} ; echo ${FTP_PASS} ) | pure-pw useradd ${FTP_USER} -f /etc/pure-ftpd/passwd/pureftpd.passwd -m -u ftpuser -d /home/ftpusers/${FTP_USER}

	echo -e "Move file /${CSV_FILE} to /home/ftpusers/${FTP_USER}/${CSV_FILE}\n"

	mkdir -p /home/ftpusers/${FTP_USER}
	mv -f /${CSV_FILE} /home/ftpusers/${FTP_USER}/
	chown ftpuser:ftpgroup -R /home/ftpusers/${FTP_USER}
fi
