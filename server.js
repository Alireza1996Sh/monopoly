const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT);

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;
