const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.connection = mongoose.connect;
db.connectionString = `mongodb://${dbConfig.HOST}:${dbConfig.HOST}/${dbConfig.DB}`;

db.user = require('./models/user.model');

module.exports = db;
