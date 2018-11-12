const router = require('express').Router();

const dessertController = require('../controllers/dessertController');
const authController = require('../controllers/authController');

// Desserts
router.route('/desserts')
  .get(dessertController.index)
  .post(dessertController.create);

router.route('/desserts/:id')
  .get(dessertController.show)
  .put(dessertController.update)
  .delete(dessertController.delete);

// Auth
router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

module.exports = router;
