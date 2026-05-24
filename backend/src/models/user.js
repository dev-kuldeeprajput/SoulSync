const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String,
  username: String,
  email: String,
  passwordHash: String,
  dob: Date,
  gender: String,
  bio: String,
  interests: [String],
  profilePhotos: [String],
  emailVerified: Boolean,
  authProvider: String,
  friendshipMode: Boolean,
  datingMode: Boolean,
  onlineStatus: String,
  lastSeen: Date,
});

const User = mongoose.model("user", userSchema);
module.exports = User;
