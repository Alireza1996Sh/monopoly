// eslint-disable-next-line no-unused-vars
const errorHandlerMiddleware = (err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.gen(500, 'something wrong happened.', {});
};

module.exports = errorHandlerMiddleware;
