const jwt = require('jsonwebtoken');

const User = require('../models/user');
const env = require('../config/environment');

function register(req, res, next) {
  User.create(req.body)
    .then(user => res.json({
      message: `Welcome, ${user.username}`
    }))
    .catch(next);
}

function login(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user && user.validatePassword(req.body.password)) {
        const token = jwt.sign({
          username: user.username,
          sub: user._id
        }, env.secret, { expiresIn: '24h' });
        res.json({
          message: `Welcome back ${user.username}`,
          token: token
        });
      } else {
        res.status(401).json({
          message: 'Not this time mateyboy'
        });
      }
    })
    .catch(next);
}



module.exports = {
  register: register,
  login: login
};
