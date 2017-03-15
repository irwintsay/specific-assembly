const router          = require('express').Router();
const AuthService     = require('../../services/auth');
const controller      = require('./controller');

router.get('/signup', controller.new);
router.get('/login', controller.login);
router.get('/profile', AuthService.restrict, controller.profile);
router.post('/', controller.create);
router.post('/login', controller.processLogin);

module.exports        = router;