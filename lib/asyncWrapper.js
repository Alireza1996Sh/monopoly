const Boom = require('@hapi/boom');

const asyncWrapper = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => {
            if (!err.isBoom) {
                return next(Boom.boomify(err));
            }
            return next(err);
        });
    };
};

module.exports = asyncWrapper;
