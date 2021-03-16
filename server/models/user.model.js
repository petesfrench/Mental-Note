const mongoose = require('mongoose');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    username: String,
    email: String,
    passaord: String
  })
);

module.exports = User;
