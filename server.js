const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const profileRouter = require('./routes/profile');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

require('./config/database');
require('./config/passport');

app.use(cors());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'TechMonarchs!',
  resave: false,
  saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', profileRouter);

app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

