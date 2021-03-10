require('./config/express');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const { router: testRouter } = require('./src/test');

const app = express();

app.set('port', process.env.PORT);

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/test', testRouter);

module.exports = app;
