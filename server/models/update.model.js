const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model');
const Template = require('./template.model');

const updateSchema = new Schema({
    template: [{
        type: Schema.Types.ObjectId,
        ref: 'Template',
        required: true
    }],
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    message: String
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Update = mongoose.model('Update', updateSchema);
module.exports = Update;