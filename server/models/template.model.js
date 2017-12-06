const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  title: { type : String , unique : true, required : true },
  description: { type : String , unique : true, required : true },
  images: [],
  developers: [],
  updates: [],
  favorites: { type : Number, default: 0},
  votes: { type : Number, default: 0},
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