const router = require('express').Router();
const beerController = require('../controllers/beerController');

router.get('/', function(req, res) {
  res.send('Welcome to da Beers');
});

router.get('/beers', beerController.index);

router.get('/beers/new', beerController.new);
router.post('/beers', beerController.create);

router.get('/beers/:beerId', beerController.show);

router.get('/beers/:beerId/edit', beerController.edit);
router.put('/beers/:beerId', beerController.update);
module.exports = router;
