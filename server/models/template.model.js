const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  title: String,
  description: String,
  images: [],
  developers: [],
  updates: [],
  favorites: Number,
  votes: Number,
  creator: { type: Schema.Types.ObjectId, ref: 'User', default: 'Sonlospadres'}
}, 
{
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated'
  }
});

const Template = mongoose.model('Template', templateSchema);
module.exports = Template;