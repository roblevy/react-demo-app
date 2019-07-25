const router = require('express').Router();
const burgers = require('../controllers/burgers');
const purchases = require('../controllers/purchases');
const messages = require('../controllers/messages');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/users')
  .get(users.index);

router.route('/burgers')
  .get(burgers.index)
  .post(burgers.create);

router.route('/burgers/:id')
  .get(burgers.show)
  .put(secureRoute, burgers.update)
  .delete(secureRoute, burgers.delete);

router.post('/burgers/:id/comments', secureRoute, burgers.commentCreate);
router.delete('/burgers/:id/comments/:commentId', secureRoute, burgers.commentDelete);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.post('/checkout', secureRoute, purchases.create);
router.get('/purchases', secureRoute, purchases.userIndex);

router.route('/messages')
  .get(secureRoute, messages.index)
  .post(secureRoute, messages.create);

router.route('/messages/:id')
  .delete(secureRoute, messages.delete);

module.exports = router;
