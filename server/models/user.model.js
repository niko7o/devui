const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Opinion = require('./opinion.model');
const Message = require('./message.model');

const userSchema = new Schema({
  username: { type: String, required: [true, 'Please specify a username'] },
  password: { type: String, required: [true, 'A password is needed'] },
  email: String,
  role: String,
  opinions: [{ type: Schema.Types.ObjectId, ref: 'Opinion' }],
  favorites: Number,
  inbox: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
}, {
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;