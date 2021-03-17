const mongoose = require('mongoose');

const DailyLog = mongoose.model(
  'DailyLog',
  new mongoose.Schema({
    date: Date,
    mood: Number,
    sleepQuality: Number,
    dietQuality: Number
  })
);
