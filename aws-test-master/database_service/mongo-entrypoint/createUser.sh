#!/bin/bash

# +----------------------------------+ 
# | Software Engineer: Erick Rettozi |
# |                                  |
# | (C) 2018                         |
# +----------------------------------+
#
# Entry-point to create the albums database, collection albums_list and give the necessary permissions to the user albums.

echo "Creating mongo albums..."

mongo admin --host localhost -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD <<EOF
use albums
db.createUser({user:'$MONGODB_APP_USER',pwd:'$MONGODB_APP_PASS',roles: ['readWrite','dbAdmin']})
db.createCollection('albums_list')
exit
EOF

echo "Mongo albums created."
