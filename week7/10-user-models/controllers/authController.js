const User = require('../models/user');
function login(req, res, next) {
  User.findOne({ email: req.body.email })
    // user is a model instance! It now has
    // user.validatePassword()
    .then(user => {
      if (user.validatePassword(req.body.password)) {
        res.json({
          message: `Welcome back ${user.username}`
        });
      } else {
        res.json({
          message: 'Not this time mateyboy'
        });
      }
    })
    .catch(next);
}

function register(req, res, next) {
  User.create(req.body)
    .then(user => res.json({
      message: `Welcome ${user.username}`
    }))
    .catch(next);
}

module.exports = {
  login: login,
  register: register
};
