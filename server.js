
// required packages for codebase to function properly
const express = require('express');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');