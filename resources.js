const router        = require('express').Router();

router.use('/', require('./controllers/home'));
router.use('/account', require('./controllers/users'));

module.exports      = router;