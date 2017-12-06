const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const User = require('../models/user.model');
const Template = require('../models/template.model');

const templateRoutes = express.Router();

templateRoutes.post("/:id/rateup", (req, res, next) => {
  
  let templateID = req.params.id;
  console.log('template id: ' + req.params.id);
  
  Template.findByIdAndUpdate(templateID, { $inc: {"votes": 1}}, { new: true }) //params: filter, update, options
  .then(editedTemplate => {
      if (!editedTemplate) {
        console.log(editedTemplate.votes);
        res.status(400).json({ message: 'This template does not exist, impossible to rate up!'});
      } else {
        res.status(200).json(`Vote count incremented to: ${ editedTemplate.votes }`);
      }
  })
});

templateRoutes.post("/:id/ratedown", (req, res, next) => {
  
  let templateID = req.params.id;
  console.log('template id: ' + req.params.id);
  
  Template.findByIdAndUpdate(templateID, { $inc: {"votes": -1}}, { new: true }) //params: filter, update, options
  .then(editedTemplate => {
      if (!editedTemplate) {
        console.log(editedTemplate.votes);
        res.status(400).json({ message: 'This template does not exist, impossible to rate up!'});
      } else {
        res.status(200).json(`Vote count incremented to: ${ editedTemplate.votes }`);
      }
  })
});

templateRoutes.post("/:id/addfavorite", (req, res, next) => {
  // User relation with Template, push the template id to user array
});

module.exports = templateRoutes;