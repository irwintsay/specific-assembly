const router        = require('express').Router();

router.use('/', require('./controllers/home'));
router.use('/account', require('./controllers/users'));
router.use('/careers', require('./controllers/jobs'));
router.use('/apply', require('./controllers/applications'));

module.exports      = router;