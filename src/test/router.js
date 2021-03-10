const router = require('express').Router();
const Boom = require('@hapi/boom');

const asyncWrapper = require('../../lib/asyncWrapper');

router.get('/', (req, res) => {
    return res.gen(200, 'ok!', {});
});

router.get(
    '/error',
    asyncWrapper(() => {
        return Promise.reject(Boom.badRequest('error test', { error: 'test!' }));
    })
);

module.exports = router;
