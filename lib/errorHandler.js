const check = require('check-types');

// eslint-disable-next-line no-unused-vars
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err.isServer) {
        // TODO: save error log
        // eslint-disable-next-line no-console
        console.error(err);
    }
    if (check.not.object(err.output) || !err.output.statusCode) {
        return res.generate(500, 'something wrong happened.', {});
    }
    if (err.output.statusCode >= 500 || !err.output.payload.message) {
        err.output.payload.message = 'something wrong happened.';
    }
    return res.gen(err.output.statusCode, err.output.payload.message, err.data || {});
};

module.exports = errorHandlerMiddleware;
