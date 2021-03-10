require('dotenv').config();

const { PORT } = process.env;

if (!PORT) {
    throw new ReferenceError('env: "PORT" is required.');
}
