const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_Controllers');
 console.log('router loader');




router.get('/', homeController.home);
router.use('/users', require('./users'));


module.exports = router;