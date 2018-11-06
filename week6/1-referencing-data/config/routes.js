const puppyController = require('../controllers/puppyController');
const commentsController = require('../controllers/commentsController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const router = require('express').Router();

router.get('/', function(req, res) {
  res.render('pages/home');
});

router.get('/about', function(req, res) {
  res.render('pages/about');
});

router.post('/puppies/:id/comments', commentsController.create);
router.delete('/puppies/:puppyId/comments/:commentId', commentsController.delete);

router.route('/puppies')
  .get(puppyController.index)
  .post(puppyController.create);

router.route('/puppies/new')
  .get(puppyController.new);

router.route('/puppies/:id')
  .get(puppyController.show)
  .put(puppyController.update)
  .delete(puppyController.delete);

router.route('/puppies/:id/edit')
  .get(puppyController.edit);

router.route('/register')
  .get(authController.registerFormRoute)
  .post(authController.registerRoute);
//
router.route('/login')
  .get(authController.loginFormRoute)
  .post(authController.loginRoute);

router.route('/logout')
  .get(authController.logoutRoute);

router.route('/user/:id')
  .get(userController.show);

module.exports = router;