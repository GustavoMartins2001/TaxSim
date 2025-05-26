const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { registerValidation, loginValidation } = require('../validators/userValidator');

router.post('/register', registerValidation, registerUser);
router.post('/login', loginValidation, loginUser);

module.exports = router;