const router        = require('express').Router();
const AuthService   = require('../../services/auth');
const controller    = require('./controller');

router.get('/', AuthService.loginCheck, controller.index);

module.exports      = router;