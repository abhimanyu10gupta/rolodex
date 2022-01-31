const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');
const Contact = require('../models/Contact');

// @router      GET api/contacts
// @desc        get all users contacts
// @access      private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// @router      POST api/contacts
// @desc        Add new contact
// @access      private
router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

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
