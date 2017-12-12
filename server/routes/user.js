const express = require('express');
const passport = require('passport');

const User = require('../models/user.model');
const Template = require('../models/template.model');

const userRoutes = express.Router();

userRoutes.post("/:id/addvote", (req, res, next) => {
  const templateId = req.params.id;    
  const votes = req.body.votes;
  const newVoteCount = votes++;

  Template.findByIdAndUpdate(templateId,
    { "$push": { "votes": newVoteCount } }, { new: true })
    .then(o => res.json(o))
    .catch(err => res.json(err));
});

// Add user opinion

// User inbox get and post
userRoutes.get("/inbox", (req, res, next) => {
  Template.findByIdAndUpdate(templateId,
    { "$push": { "votes": newVoteCount } }, { new: true })
    .then(o => res.json(o))
    .catch(err => res.json(err));
});

// Get user's favorites
//   userRoutes.get('/favorites', (req, res, next) => {
//     User.findById(req.user._id)
//     .populate('favorites')
//     .then(list => res.json(list))
//     .catch(error => res.json(error));
//     break;
//  });

module.exports = userRoutes;