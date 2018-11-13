const jwt = require('jsonwebtoken');

const router = require('express').Router();

const dessertController = require('../controllers/dessertController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

function secureRoute(req, res, next) {
  const token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, 'moth', function(err) {
    if (err) {
      res.status(401).json({ message: 'Unauthorised!' });
    } else {
      next();
    }
  });
}

// Desserts
router.route('/desserts')
  .get(dessertController.index)
  .post(secureRoute, dessertController.create);

router.route('/desserts/:id')
  .get(dessertController.show)
  .put(secureRoute, dessertController.update)
  .delete(secureRoute, dessertController.delete);


// Users
router.route('/users/:id')
  .get(userController.show);


// Auth
router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

module.exports = router;
