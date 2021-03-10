const router = require('express').Router();

router.get('/', (req, res) => res.gen(200, 'ok!', {}));

router.get('/error', () => {
    throw new Error('test error');
});

module.exports = router;
