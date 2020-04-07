const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//initializations
const app = express();
require('./config/database.config');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Global variables

// Routes
app.use(require('./routes/providers.route'));

module.exports = app;
