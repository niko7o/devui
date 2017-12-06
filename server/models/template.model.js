const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Update = require('./update.model');
const Message = require('./message.model');

const templateSchema = new Schema({
  title: { 
    type: String, 
    unique: true, 
    required: true 
  },
  description: { type: String, required: true },
  images: [{ type: String}],
  developers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  updates: [{ type: Schema.Types.ObjectId, ref: 'Update' }],
  favorites: { type : Number, default: 0},
  votes: { type : Number, default: 0},
  creator: { type: Schema.Types.ObjectId, ref: 'User'}
}, 
{
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated'
  }
});

const Template = mongoose.model('Template', templateSchema);
module.exports = Template;