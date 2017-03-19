const router          = require('express').Router();
const AuthService     = require('../../services/auth');
const controller      = require('./controller');

router.get('/', AuthService.loginCheck, controller.index);
router.get('/new', AuthService.loginCheck, controller.new);
router.get('/thankyou', AuthService.loginCheck, controller.thank);
router.get('/:id', AuthService.restrict, controller.show);
router.post('/', controller.create);

module.exports        = router;