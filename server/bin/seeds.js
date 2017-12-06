const dotenv = require('dotenv').load();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const User = require('../models/user.model');
const Template = require('../models/template.model');
// const Message = require('../models/message.model');
// const Opinion = require('../models/opinion.model');
// const Votes = require('../models/votes.model')
mongoose.connect(process.env.DBURL, { useMongoClient: true} );
const pass = 'devuiseeds';
const salt = bcrypt.genSaltSync(bcryptSalt);
const encryptedPass = bcrypt.hashSync(pass, salt);

// Users

const users = [
  {
    username: 'nikoto',
    password: encryptedPass,
    role: 'developer'
  },
  {
    username: 'davidsanz',
    password: encryptedPass,
    role: 'ui'
  }
];

User.collection.drop();

User.create(users, (err, docs) => {
  if (err) { throw err; }
  docs.forEach((user) => {
    console.log('User: ' + user.username + ' created :)');
  });
});

// Templates

const templates = [
  {
    title: 'Proyecto De La Muerte',
    description: 'este proyecto mola perros malos subscribense'
  },
  {
    title: 'Interface De La Buena',
    description: 'cada uno con lo suyo broski'
  }
];

Template.collection.drop();
Template.create(templates, (err, docs) => {
  if (err) { throw err; }
  docs.forEach((template) => {
    console.log('Template: ' + template.title);
  });
 });

mongoose.connection.close();