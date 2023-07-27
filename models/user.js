const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: Number,
  username: String,
  email: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
