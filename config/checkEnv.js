require('dotenv').config();
const check = require('check-types');

const { PORT } = process.env;

check.assert.integer(PORT && +PORT);
