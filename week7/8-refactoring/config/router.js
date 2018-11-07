const router = require('express').Router();

const fishController = require('../controllers/fishController');
router.route('/fishes')
  .get(fishController.index)
  .post(fishController.create);

router.route('/fishes/:id')
  .get(fishController.show)
  .put(fishController.update)
  .delete(fishController.delete);

module.exports = router;
