const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model');

const voteSchema = new Schema({
    template: [{ type: Schema.Types.ObjectId, ref: 'Template'}],
    user: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    hasVoted: boolean
});

const Vote = mongoose.model('Vote', voteSchema);
module.exports = Vote;