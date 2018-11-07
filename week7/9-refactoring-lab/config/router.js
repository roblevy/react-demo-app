const router = require('express').Router();

const dessertController = require('../controllers/dessertController');
router.route('/desserts')
  .get(dessertController.index)
  .post(dessertController.create);

router.route('/desserts/:id')
  .get(dessertController.show)
  .put(dessertController.update)
  .delete(dessertController.delete);

module.exports = router;
