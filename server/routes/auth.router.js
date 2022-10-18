const express = require('express')
const UserCtrl = require('../controllers/UserController');
const router = express.Router();

router.post('/signup', UserCtrl.createUser);
router.post('/login', UserCtrl.loginUser);

module.exports = router;