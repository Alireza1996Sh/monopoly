const router = require('express').Router();

router.get('/', (req, res) => res.gen(200, 'ok!', {}));

module.exports = router;
