const express = require('express');
const router = express.Router();

const usrecontrollers = require('../controllers/user_controller');




router.get('/profile', usrecontrollers.profile);



module.exports = router;