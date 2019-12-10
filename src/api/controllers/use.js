const express = require('express');
const userService = require('../services/user');

const router = express.Router({ mergeParams: true });

router.post('/', (req, res) => {
  const user = req.body;
  const userData = userService.create(user);

  res.json({
    status: 'ok',
    user: userData,
  });
});

module.exports = router;
