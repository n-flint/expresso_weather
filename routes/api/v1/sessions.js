var express = require('express');
var router = express.Router();
var User = require('../../../models').User;
var bcrypt = require('bcryptjs')

// Create a new session
router.post('/', async function (req, res, next) {
  try {
    let currentUser = await User.findOne({
      where: {
        email: req.body.email
      }
    })
    let authorization = await bcrypt.compare(req.body.password, currentUser.password)
    if (authorization) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify({api_key: currentUser.api_key}));
    }
    else {
      throw 'Invalid Credentials'
    }
  }
  catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(401).send({error})
  }
})

module.exports = router;