const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const User = require('../models/user.model');
const Template = require('../models/template.model');

const templateRoutes = express.Router();

/* Rate template up */
templateRoutes.post("/:id/rateup", (req, res, next) => {
  let templateID = req.params.id;  
  Template.findByIdAndUpdate(templateID, { $inc: {"votes": 1}}, { new: true }) //params: filter, update, options
  .then(editedTemplate => {
      if (!editedTemplate) {
        res.status(400).json({ message: 'This template does not exist, impossible to rate up!'});
      } else {
        res.status(200).json(`Vote count incremented to: ${ editedTemplate.votes }`);
      }
  })
  .catch(res.status(500).json({ message: 'Something went wrong with the server while rating up :('}));
});

/* Rate template down */
templateRoutes.post("/:id/ratedown", (req, res, next) => {
  let templateID = req.params.id;
  Template.findByIdAndUpdate(templateID, { $inc: {"votes": -1}}, { new: true }) //params: filter, update, options
  .then(editedTemplate => {
      if (!editedTemplate) {
        res.status(400).json({ message: 'This template does not exist, impossible to rate down!'});
      } else {
        res.status(200).json(`Vote count incremented to: ${ editedTemplate.votes }`);
      }
  })
  .catch(res.status(500).json({ message: 'Something went wrong with the server while rating down'}));
});

/* Add template update */
templateRoutes.post("/:id/:msg/addupdate/", (req, res, next) => {

  let templateID = req.params.id;
  let userID = '5a2925c41ea653c9ebb310f2'; // user is test, but should be user.locals
  let msg = req.params.msg;

  console.log('template id: ' + req.params.id);
  console.log('user id' + userID)
  
  User.findByIdAndUpdate(templateID, { "$push": { "updates": msg } }, { new: true })
    // .populate('title')
    .then(editedTemplate => {
      if (!editedTemplate) {
        res.status(400).json({ message: 'Impossible to add update! Template does not exist'});
      } else {
        res.status(200).json(`Updated template. ${ editedTemplate.updates }`);
      }
    })
    .catch(res.status(500).json({ message: 'Something went wrong with the server while sending update'}));
});

templateRoutes.post("/:id/addfavorite", (req, res, next) => {
  // User relation with Template, push the template id to user's favorites array
  let templateID = req.params.id;
  let userID = '5a2925c41ea653c9ebb310f2'; // user test

  console.log('template id: ' + req.params.id);
  console.log('user id' + userID)
  
  User.findByIdAndUpdate(userID, { "$push": { "favorites": templateID } }, { new: true })
    // .populate('title')
    .then(editedUser => {
      if (!editedUser) {
        console.log(editedUser.favorites);
        res.status(400).json({ message: 'Impossible to favorite! Template does not exist'});
      } else {
        res.status(200).json(`Favorited template. User's favorites are: ${ editedUser.favorites }`);
      }
  })
});

templateRoutes.post("/:id/removefavorite", (req, res, next) => {
  // User relation with Template, push the template id to user's favorites array
  let templateID = req.params.id;
  let userID = '5a2925c41ea653c9ebb310f2'; // user test

  console.log('template id: ' + req.params.id);
  console.log('user id' + userID)
  
  User.findByIdAndUpdate(userID, { "$pull": { "favorites": templateID } }, { new: true })
    .then(editedUser => {
      if (!editedUser) {
        console.log(editedUser.favorites);
        res.status(400).json({ message: 'Impossible to unfavorite! Template does not exist'});
      } else {
        res.status(200).json(`REMOVED template from FAVORITES. User's favorites are: ${ editedUser.favorites }`);
      }
  })
});

module.exports = templateRoutes;