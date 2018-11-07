const router = require('express').Router();

const fishController = require('../controllers/fishController');
const authController = require('../controllers/authController');

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

router.route('/fishes')
  .get(fishController.index)
  .post(fishController.create);

router.route('/fishes/:id')
  .get(fishController.show)
  .put(fishController.update)
  .delete(fishController.delete);

module.exports = router;
