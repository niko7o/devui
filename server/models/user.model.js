const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: [true, 'Please specify a username'] },
  password: { type: String, required: [true, 'A password is needed'] },
  email: String,
  role: String,
  opinions: [],
  favorites: [],
  inbox: []
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;