const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const User = require('../models/user.model');
const Template = require('../models/template.model');
const templateRoutes = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads' })

/* Rate template up */
templateRoutes.get("/:id/rateup", (req, res, next) => {
  let templateID = req.params.id;

  Template.findByIdAndUpdate(templateID, { $inc: {"votes": 1}}, { new: true }) //params: filter, update, options
  .then(editedTemplate => {
      if (!editedTemplate) {
        res.status(400).json({ message: 'This template does not exist, impossible to rate up!'});
      } else {
        res.status(200).json('Vote count incremented.');
      }
  }).catch(res.status(500).json({ message: 'Something went wrong with the server while rating up'}));
});

/* Rate template down */
templateRoutes.get("/:id/ratedown", (req, res, next) => {
  let templateID = req.params.id;
  
  Template.findByIdAndUpdate(templateID, { $inc: {"votes": -1}}, { new: true }) //params: filter, update, options
  .then(editedTemplate => {
      if (!editedTemplate) {
        res.status(400).json({ message: 'This template does not exist, impossible to rate down!'});
      } else {
        res.status(200).json(`Vote count incremented to: ${ editedTemplate.votes }`);
      }
  }).catch(res.status(500).json({ message: 'Something went wrong with the server while rating down'}));
});

/* Add template update */
templateRoutes.post("/:id/addupdate/", (req, res, next) => {

  let templateID = req.params.id;
  let userID = req.user._id;
  let msg = `estoy probando las updates`; // change this to req.body when using angular
  
  User.findByIdAndUpdate(templateID, { "$push": { "updates": msg } }, { new: true })
    .populate('updates')
    .then(editedTemplate => {
      if (!editedTemplate) {
        res.status(400).json({ message: 'Impossible to add update! Template does not exist'});
      } else {
        res.status(200).json(`Updated template. ${ editedTemplate.updates }`);
      }
    }).catch(res.status(500).json({ message: 'Something went wrong with the server while sending update'}));
});

/* Add template to user's favorites */
templateRoutes.post("/:id/addfavorite", (req, res, next) => {

  let templateID = req.params.id;
  let userID = req.user._id;
  let hasFavorited = false;
  
  User.findByIdAndUpdate(userID, { "$push": { "favorites": templateID } }, { new: true })
    .populate('favorites')
    .then(user => {
      if (!user) {
        res.status(400).json({ message: 'Impossible to favorite! Template does not exist'});
      } else {
        res.status(200).json(`Favorited template. ${user}`);
      }
  })
});

/* Remove template from user's favorites */
templateRoutes.post("/:id/removefavorite", (req, res, next) => {
  let templateID = req.params.id;
  let userID = req.user._id;
  let hasFavorited = true;
  
  User.findByIdAndUpdate(userID, { "$pull": { "favorites": templateID } }, { new: true })
    .populate('favorites')
    .then(editedUser => {
      if (!editedUser) {
        res.status(400).json({ message: 'Impossible to unfavorite! Template does not exist'});
      } else {
        res.status(200).json(`REMOVED template from FAVORITES.`);
      }
  })
});

/* Upload photo */
templateRoutes.post('/uploadPhoto', upload.single('image'), (req, res, next) => {
  if (req.file) {
    res.status(200).json(req.file.path);
    console.log(req.file);
  } else {
    res.status(500).json("There was an error uploading this photo. Try again.");
  }
});

/* CREATE Template with images array */
templateRoutes.post('/createOne', (req, res, next) => {
  console.log(req.body);

  const obj = new Template({
    title: req.body.title,
    description: req.body.description,
    creator: req.body.creator,
    images: req.body.images
  });

  console.log(obj);
  obj.save()
  .then(o => res.json(o))
  .catch(e => res.json(e));
});

/* Provide zip path for when developer is done */

templateRoutes.post('/addZip', (req, res, next) => {

  console.log(req.body);

  let templateID = req.params.id;
  let userID = req.user._id;
  let pathToZip = req.body.zip;

  console.log(req.body);  
  
  Template.findByIdAndUpdate(templateID, { "$push": { "zip": pathToZip } }, { new: true })
  .then(newTemplate => {
    if (!newTemplate) {
      res.status(400).json({ message: 'Could not add path to zip of to this template'});
    } else {
      res.status(200).json(`Added ${pathToZip} to template. `);
    }
  })
});  

/* Add developer to template's developers */
templateRoutes.post("/:id/devadd", (req, res, next) => {
  
    let templateID = req.params.id;
    let userID = req.user._id;
    
    Template.findByIdAndUpdate(templateID, { "$push": { "developers": userID } }, { new: true })
      .then(newTemplate => {
        if (!newTemplate) {
          res.status(400).json({ message: 'Could not add developer to this template'});
        } else {
          res.status(200).json(`Added dev ${user} to template. `);
        }
    })
});

/* Remove developer from template's developers */
templateRoutes.post("/:id/devrem", (req, res, next) => {
  
    let templateID = req.params.id;
    let userID = req.user._id;
    
    Template.findByIdAndUpdate(templateID, { "$pull": { "developers": userID } }, { new: true })
      .then(newTemplate => {
        if (!newTemplate) {
          res.status(400).json({ message: 'Could not remove developer from this template'});
        } else {
          res.status(200).json(`Removed dev ${user} to template. `);
        }
    })
});

module.exports = templateRoutes;