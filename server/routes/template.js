const express = require('express');
const passport = require('passport');
const User = require('../models/user.model');
const Template = require('../models/template.model');
const templateRoutes = express.Router();

templateRoutes.post('/new', (req, res, next) => {
  const { 
    title, 
    description,
    images,
    developers,
    updates,
    creator
  } = req.body;

  if (!title || !description) {
    res.status(400).json({ message: 'Provide a template title and description' });
    return;
  }

  Template.findOne({ title }, '_id')
  .then(template => {
    if (template) {
      res.status(400).json({ message: 'A template with this name already exists' });
      return;
    }
    const theTemplate = new Template({
      title,
      description,
      images,
      developers,
      updates,
      creator
    });
    return theTemplate.save();
  })
  .then(newTemplate => {
    console.log(`creating new template: ${newTemplate}`);
    req.login(newTemplate, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }
      res.status(200).json(req.user);
    });
  })
  .catch(e => {
      console.log(e)
      res.status(500).json({ message: 'Something went wrong' });
  });
});

module.exports = templateRoutes;