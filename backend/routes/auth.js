const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getMe,
  updateDetails,
  updatePassword,
  saveRecipe,
  removeSavedRecipe
} = require('../controllers/auth');

const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.put('/saverecipe/:id', protect, saveRecipe);
router.put('/removesavedrecipe/:id', protect, removeSavedRecipe);

module.exports = router;
