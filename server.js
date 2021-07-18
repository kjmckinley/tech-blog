
// required packages for codebase to function properly
const express = require('express');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

//add session storing
const session = require('express-session');

const storeSequelize = require('connect-session-sequelize')(session.Store);

const sessionDB = {
    secret: 'the big secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  }

const app = express();
const PORT = process.env.PORT || 3001;
app.use(session(sessionDB));