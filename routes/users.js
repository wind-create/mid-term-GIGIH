const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', (req, res) => {
  const { id, username, email } = req.body;
  const newUser = new User({ id, username, email });

  newUser.save()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Route to get all users
router.get('/', (req, res) => {
    User.find()
      .then((users) => {
        const usersArray = users.map((user) => {
          return {
            id: user.id,
            username: user.username,
            email: user.email,
            created_at: user.created_at,
            updated_at: user.updated_at,
          };
        });
  
        res.json({ users: usersArray });
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });

// Route to get a specific user by ID
router.get('/:id', (req, res) => {
  const userId = req.params.id;

  User.findOne({ id: userId })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }

      const userData = {
        id: user.id,
        username: user.username,
        email: user.email,
        created_at: user.created_at,
        updated_at: user.updated_at,
      };

      res.json(userData);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Route to update a specific user by ID
router.patch('/:id', (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;

  User.findOne({ id: userId })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }

      // Update user properties if provided in the request body
      if (username) {
        user.username = username;
      }

      if (email) {
        user.email = email;
      }

      user.updated_at = new Date();

      user.save()
        .then((updatedUser) => res.json(updatedUser))
        .catch((err) => res.status(500).json({ error: err.message }));
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Route to delete a specific user by ID
router.delete('/:id', (req, res) => {
  const userId = req.params.id;

  User.findOneAndDelete({ id: userId })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }

      res.json({ message: 'User deleted successfully.' });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});


module.exports = router;
