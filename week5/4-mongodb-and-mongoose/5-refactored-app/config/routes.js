const cocktailController = require('../controllers/cocktailController');
const router = require('express').Router();

// Render the layout.ejs file when the user requests the home page
router.get('/', function(req, res) {
  // EJS files in a 'views' folder are the default:
  res.render('home'); // An empty object = no data
});

// Load the about page
router.get('/about', function(req, res) {
  res.render('about');
});

// INDEX Route
router.get('/cocktails', cocktailController.indexRoute);

// NEW Route: NOTE: This must appear
// above the show route, otherwise the show route
// will load with id = 'new'
router.get('/cocktails/new', cocktailController.newRoute);

// Listen for POST requests to /cocktails
router.post('/cocktails', cocktailController.createRoute);

// SHOW Route
router.get('/cocktails/:id', cocktailController.showRoute);

// UPDATE route
router.put('/cocktails/:id', cocktailController.updateRoute);

// EDIT route
router.get('/cocktails/:id/edit', cocktailController.editRoute);

// DELETE Route
router.delete('/cocktails/:id', cocktailController.deleteRoute);

module.exports = router;
