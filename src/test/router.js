const router = require('express').Router();
const Boom = require('@hapi/boom');

const asyncWrapper = require('../../lib/asyncWrapper');

router.get('/', (req, res) => res.gen(200, 'ok!', {}));

router.get(
    '/error',
    asyncWrapper(() => Promise.reject(Boom.badRequest('error test', { error: 'test!' })))
);

module.exports = router;
