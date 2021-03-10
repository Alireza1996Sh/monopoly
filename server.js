require('./config/express');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const { router: testRouter } = require('./src/test');
const errorHandlerMiddleware = require('./lib/errorHandler');

const app = express();

app.set('port', process.env.PORT);

// middlewares
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/test', testRouter);

// error handlers
app.use(errorHandlerMiddleware);

module.exports = app;
