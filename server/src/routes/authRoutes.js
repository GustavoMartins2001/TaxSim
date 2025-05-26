const express = require('express');
const router = express.Router();
const { refreshToken, logoutUser, forgotPassword, resetPassword } = require('../controllers/authController');

router.post('/refresh-token', refreshToken);
router.post('/logout', logoutUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);


module.exports = router;