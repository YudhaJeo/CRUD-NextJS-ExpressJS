// src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// endpoint GET /users
router.get('/users', userController.getUsers);

module.exports = router;