const Cocktail = require('../models/cocktail');

function createRoute(req, res) {
  Cocktail.findById(req.params.cocktailId)
    .then(cocktail => {
      console.log('Creating a comment!', cocktail, req.body);
      // Add a rating to the cocktail's ratings array
      cocktail.ratings.push(req.body);
      // Save this particular cocktail
      cocktail.save().then(() => res.redirect('/cocktails'));
    });
}

function deleteRoute(req, res) {
  console.log('Deleting rating', req.params.ratingId);
  // Redirect to the SHOW page
  Cocktail.findById(req.params.cocktailId)
    .then(cocktail => {
      // Find the rating by ID and remove it
      // .id here is a function:
      cocktail.ratings.id(req.params.ratingId).remove();
      // Now save this particular cocktail
      // and redirect to the show page
      cocktail.save()
        .then(() => res.redirect(`/cocktails/${req.params.cocktailId}`));
    });
}

module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
