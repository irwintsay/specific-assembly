const router          = require('express').Router();
const AuthService     = require('../../services/auth');
const controller      = require('./controller');

router.get('/signup', AuthService.loginCheck, controller.new);
router.get('/login', AuthService.loginCheck, controller.login);
router.get('/profile', AuthService.restrict, controller.profile);
router.post('/', controller.create);
router.post('/login', controller.processLogin);
router.delete('/logout', controller.processLogout);

module.exports        = router;