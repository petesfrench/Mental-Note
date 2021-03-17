const router = require('express').Router();
const { register, login } = require('../controllers/auth.controller');
const {
  checkDuplicateEmail,
  checkDuplicateUsername
} = require('../middlewares/verifySignUp');

router.post('/register', checkDuplicateEmail, checkDuplicateUsername, register);
router.post('/login', login);

module.exports = router;
