require('dotenv').config();
const check = require('check-types');

const { PORT, MONGODB_URI } = process.env;

check.assert.integer(PORT && +PORT);
check.assert.nonEmptyString(MONGODB_URI);
