require('dotenv').config();
const check = require('check-types');

const { NODE_ENV, PORT, MONGODB_URI } = process.env;
const validNodeEnvs = ['development', 'production', 'test'];

check.assert.in(NODE_ENV, validNodeEnvs);
check.assert.integer(PORT && +PORT);
check.assert.nonEmptyString(MONGODB_URI);
