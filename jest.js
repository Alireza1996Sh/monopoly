require('./config/checkEnv');
// eslint-disable-next-line import/no-extraneous-dependencies
const supertest = require('supertest');
const app = require('./server');

const request = supertest(app);

module.exports = { request };
