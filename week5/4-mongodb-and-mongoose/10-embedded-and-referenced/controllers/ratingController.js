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

module.exports = {
  createRoute: createRoute
};
