module.exports = {
  HOST: process.env.MONGO_DB_HOST || 'localhost',
  PORT: process.env.MONGO_DB_PORT || 27017,
  DB: process.env.MONGO_DB_DATABASE
};
