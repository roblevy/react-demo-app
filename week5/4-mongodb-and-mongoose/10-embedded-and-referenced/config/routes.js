const cocktailController = require('../controllers/cocktailController');
const authController = require('../controllers/authController');
const ratingController = require('../controllers/ratingController');
const secureRoute = require('../lib/secureRoute');
const router = require('express').Router();

router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

router.get('/logout', authController.logoutRoute);

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
router.get('/cocktails/new', secureRoute, cocktailController.newRoute);

// Listen for POST requests to /cocktails
router.post('/cocktails', secureRoute, cocktailController.createRoute);

// SHOW Route
router.get('/cocktails/:id', cocktailController.showRoute);

// UPDATE route
router.put('/cocktails/:id', secureRoute, cocktailController.updateRoute);

// EDIT route
router.get('/cocktails/:id/edit', secureRoute, cocktailController.editRoute);

// DELETE Route
router.delete('/cocktails/:id', secureRoute, cocktailController.deleteRoute);

// Rating CREATE route
router.post('/cocktails/:cocktailId/ratings', secureRoute, ratingController.createRoute);

// Rating DELETE route
router.delete('/cocktails/:cocktailId/ratings/:ratingId', secureRoute,
  ratingController.deleteRoute);

module.exports = router;
