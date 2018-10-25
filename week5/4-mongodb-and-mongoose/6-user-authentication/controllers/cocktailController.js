const Cocktail = require('../models/cocktail');

function indexRoute(req, res) {
  // Find all the cocktails, then render an ejs file:
  // Find returns an array
  Cocktail.find().then(function(result) {
    const cocktailObject = {
      cocktails: result
    };
    res.render('cocktails/index', cocktailObject);
  });
  // This is what we previously did:
  // res.render('cocktails/index', cocktailObject);
}

function newRoute(req, res) {
  res.render('cocktails/new');
}

function createRoute(req, res) {
  Cocktail.create(req.body)
    .then(result => res.redirect(`/cocktails/${result._id}`));
}

function showRoute(req, res) {
  console.log('req.params is', req.params);
  // Get a cocktail out of the database, using its ID
  // Get a particular cocktail then render an ejs file
  Cocktail.findById(req.params.id).then(result => {
    res.render('cocktails/show', result);
  });
  // Here's what we did earlier
  // const cocktail = cocktailObject.cocktails.filter(cocktail =>
  //   cocktail.id === req.params.id)[0];
  // res.render('cocktails/show', cocktail);
}

function updateRoute(req, res) {
  // req.params.id is the id of the cocktail we are trying
  // to update
  console.log(`Updating cocktail id ${req.params.id}`, req.body);
  // Let's update the database using the model and the new data:
  Cocktail.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      // Redirect to the index (for now!)
      res.redirect('/cocktails');
    });
}

function editRoute(req, res) {
  // First get the cocktail from the database
  // findById returns an object, so we can hand it straight
  // into the EJS file.
  Cocktail.findById(req.params.id)
    .then(result => {
      res.render('cocktails/edit', result);
    });
}

function deleteRoute(req, res) {
  Cocktail.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/cocktails'));
}

module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  editRoute: editRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute
};
