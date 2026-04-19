const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe, getUsers } = require('../controllers/userController');
const { protect } = require('../middleware/auth');

// POST /api/users/register → register a new user
router.post('/register', registerUser);

// POST /api/users/login → login
router.post('/login', loginUser);

// GET /api/users/me → get current user (protected)
router.get('/me', protect, getMe);

// GET /api/users → list all users (admin)
router.get('/', protect, getUsers);

module.exports = router;
