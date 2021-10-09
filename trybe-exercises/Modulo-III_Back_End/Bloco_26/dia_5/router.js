const router = require('express').Router();
const { validateEmail, validateUser, validatePassword } = require('./middleares');

  
router.post(
    '/register',
    validateUser,
    validateEmail,
    validatePassword,
    (_req, res) => res.status(201).json({ message: 'user created' }),
  );

  router.post(
    '/login',
    validateEmail,
    validatePassword,
    (_req, res) => res.status(200).json({ token: '86567349784e' })
  );

  module.exports = router;