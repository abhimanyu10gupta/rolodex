const express = require('express');
const router = express.Router();

// @router      GET api/contacts
// @desc        get all users contacts
// @access      private
router.get('/', (req, res) => {
  res.send('Get all user contacts');
});

// @router      POST api/contacts
// @desc        Add new contact
// @access      private
router.post('/', (req, res) => {
  res.send('Add a contact');
});

// @router      PUT api/contacts/:id
// @desc        Register a user
// @access      Private
router.put('/:id', (req, res) => {
  res.send('Update Contact');
});

// @router      POST api/contacts/:id
// @desc        Register a user
// @access      Public
router.delete('/:id', (req, res) => {
  res.send('Delete a contact ');
});

module.exports = router;
