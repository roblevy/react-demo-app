const router = require('express').Router();
const fishController = require('../controllers/fishController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const jwt = require('jsonwebtoken');

// Check for the token:
function secureRoute(req, res, next) {
  console.log('These are the headers of the request', req.headers);
  // Remove the Bearer bit from the start of the header:
  const token = req.headers.authorization.replace('Bearer ', '');
  // Check the token matches our secret with jwt.verify.
  // 3 arguments: token, secret, callback function which runs if
  // the token checks out
  jwt.verify(token, 'blues brothers', function(err) {
    // If err is undefined, we know the token checked out.
    // Otherwise it was bad.
    if (err) {
      // The token was bad
      res.status(401).json({ message: 'Unauthorised!' });
    } else {
      // The token was good. Continue on our journey...
      next();
    }
  });
}

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

router.route('/fishes')
  .get(fishController.index)
  .post(secureRoute, fishController.create);

router.route('/fishes/:id')
  .get(fishController.show)
  .put(secureRoute, fishController.update)
  .delete(secureRoute, fishController.delete);

router.route('/users/:id')
  .get(userController.show);

module.exports = router;
