'use strict';

const MongoClient = require('mongodb').MongoClient;

const GGBMONGO_USERNAME = process.env.GGBMONGO_USERNAME;
const GGBMONGO_PASSWORD = process.env.GGBMONGO_PASSWORD;
const mongodbUrl = `mongodb://${GGBMONGO_USERNAME}:${GGBMONGO_PASSWORD}@localhost:27017/gogobit`;

module.exports = {
  connect: function connect(callback) {
    MongoClient.connect(mongodbUrl, (err, db) => {
      callback(err, db);
    });
  },
  promiseConnect: function promiseConnect() {
    return MongoClient.connect(mongodbUrl);
  },
};
