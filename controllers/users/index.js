const router          = require('express').Router();
const controller      = require('./controller');

router.get('/signup', controller.new);
router.get('/login', controller.processLogin);
router.post('/', controller.create);

module.exports        = router;