require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');

const api = require('./routes/api');
const template = require('./routes/template');
const user = require('./routes/user');
const auth = require('./routes/auth');
const index = require('./routes/index');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const app = express();

mongoose.connect(process.env.DBURL).then(() =>{
  console.log(`Devui connected to db: ${process.env.DBURL}`);
});

var whitelist = [
    'http://localhost:4200',
];

var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};

app.use(cors(corsOptions));

// mv client/dist/* server/public

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(session({
  secret: 'ui rocks',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}))

require('./passport')(app);

app.use((req,res,next) => {
  res.locals.user = req.user;
  next();
});

// Custom routes
app.use('/', index)
app.use('/api/templates', template)
app.use('/user', user)
app.use('/api/auth', auth);

app.use(function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

// API Create, Read, Update, Delete for models below
app.use('/api/users', api(require('./models/user.model')));
app.use('/api/templates', api(require('./models/template.model')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;