const express = require('express');
const router = express.Router();
const { registerUser, getUsers } = require('../controllers/userController');

// POST /api/users/register → register a new user
router.post('/register', registerUser);

// GET  /api/users          → list all users (admin)
router.get('/', getUsers);

module.exports = router;
