const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const User = require('../models/user.model');
const Template = require('../models/template.model');

const templateRoutes = express.Router();

templateRoutes.post("/:id/rateup", (req, res, next) => {
  let templateID = req.params.id;
  console.log('template id: ' + req.params.id);
  // if error try with req.params.id instead of req.params
  Template.findOneAndUpdate({ id: templateID }, req.body.votes = req.body.votes + 1, { new: true }) //params: filter, update, options
  .then(editedTemplate => {
      console.log('votes: ' + req.body.votes);
      if (!editedTemplate) {
          res.status(400).json({ message: 'This template does not exist, impossible to rate up!'});
      } else {
          res.status(200).json(`Vote count incremented to: ${ editedTemplate.vote }`);
      }
  })
});

templateRoutes.post("/:id/ratedown", (req, res, next) => {
  // if error try with req.params.id instead of req.params
  Template.findOneAndUpdate({ id: req.params.id }, req.body.votes = req.body.votes - 1, { new: true }) //params: filter, update, options
  .then(editedTemplate => {
      if (!editedTemplate) {
          res.status(400).json({ message: 'This template does not exist, impossible to rate down!'});
      } else {
          res.status(200).json(`Vote count incremented to: ${ editedTemplate.vote }`);
      }
  })
});

templateRoutes.post("/:id/addfavorite", (req, res, next) => {
  // User relation with Template, push the template id to user array
});

module.exports = templateRoutes;