const router          = require('express').Router();
const AuthService     = require('../../services/auth');
const controller      = require('./controller');

router.get('/', controller.index);
router.get('/new', controller.new);
router.get('/thankyou', controller.thank);
router.get('/:id', AuthService.restrict, controller.show);
router.post('/', controller.create);

module.exports        = router;