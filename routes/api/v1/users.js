var express = require('express');
var router = express.Router();
var User = require('../../../models').User;
var uuidv1 = require('uuid/v1');
var saltRounds = 8;
var bcrypt = require('bcryptjs')

//  Create a new user
router.post("/", async function (req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, async function(err, hashedPassword){
    try {
      if(req.body.password === req.body.password_confirmation) {
        let new_user = await User.create({
          email: req.body.email,
          password: hashedPassword,
          api_key: uuidv1(),
          active: req.body.active
        })
        res.setHeader("Content-Type", "application/json");
        res.status(201).send(JSON.stringify({api_key: new_user.api_key}));
      } else {
        throw 'Passwords Do Not Match'
      }
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({ error });
    }
    return new_user
  })
    // .then(user => {
    //   res.setHeader("Content-Type", "application/json");
    //   res.status(201).send(JSON.stringify({api_key: user.api_key}));
    // })
    // .catch(error => {
    //   res.setHeader("Content-Type", "application/json");
    //   res.status(500).send({ error });
    // });
});

module.exports = router;