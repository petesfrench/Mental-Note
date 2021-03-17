const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  dailyLogs: [
    {
      date: Date,
      mood: Number,
      sleepQuality: Number,
      dietQuality: Number,
      activityLevel: Number,
      todoScore: Number,
      todos: [
        {
          description: String,
          completed: Boolean
        }
      ]
    }
  ]
});

module.exports = mongoose.model('User', UserSchema);
