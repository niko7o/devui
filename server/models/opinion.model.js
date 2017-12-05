const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model');

const opinionSchema = new Schema({
    from: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    to: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    text: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Opinion = mongoose.model('Opinion', opinionSchema);
module.exports = Opinion;