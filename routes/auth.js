const express = require('express');
const router = express.Router();

// @router      GET api/auth
// @desc        Get logged in user
// @access      Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @router      POST api/auth
// @desc        Auth User and get token
// @access      Private
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
