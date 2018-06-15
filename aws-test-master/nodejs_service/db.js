/*
* +----------------------------------+
* | Software Engineer: Erick Rettozi |
* |                                  |
* | (C) 2018                         |
* +----------------------------------+
*
* Connects to database
*/

const mongoose = require('mongoose');  

// Retry connection
const connectWithRetry = () => {
  console.log('MongoDB connection with retry');
  return mongoose.connect(process.env.MONGO_URI, {autoReconnect: true, autoIndex: false, reconnectTries: Number.MAX_SAFE_INTEGER});
};

// Exit application on error
mongoose.connection.on('error', err => {
  console.log(`MongoDB connection error: ${err}`)
  setTimeout(connectWithRetry, 5000)
  // process.exit(-1)
})

mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected');
})

//if (config.env === 'development') {
//  mongoose.set('debug', true)
//}

//const connect = () => {
//  connectWithRetry()
//}

//module.exports = mongoose.connect(process.env.MONGO_URI, {autoReconnect: true, autoIndex: false, reconnectTries: Number.MAX_SAFE_INTEGER});

module.exports = connectWithRetry();
