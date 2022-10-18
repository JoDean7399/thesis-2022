const express = require('express');
const UserCtrl = require('../controllers/UserController');
const authenticateToken = require('../helper/verifyToken');
const router = express.Router(); 

router.get('/user', authenticateToken, UserCtrl.getUser);

module.exports = router;