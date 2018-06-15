# FTP-Server Dockerfile

# Pull FTP image
FROM stilliard/pure-ftpd

WORKDIR /opt/albums

COPY ${CSV_FILE} /${CSV_FILE}
COPY createFtpUser.sh /createFtpUser.sh

RUN chmod 0755 /createFtpUser.sh

CMD /createFtpUser.sh && /run.sh -c 30 -C 10 -l puredb:/etc/pure-ftpd/pureftpd.pdb -E -j -R -P $PUBLICHOST -p 30000:30059
