const Purchase = require('../models/purchase');

// Every purchase in the database, regardless of user
function indexRoute(req, res, next) {
  Purchase.find()
    .then(purchases => res.json(purchases))
    .catch(next);
}

// All purchases for the token user
function userIndexRoute(req, res, next) {
  Purchase.find({ user: req.tokenUserId })
    .populate('burger')
    .then(purchases => res.json(purchases))
    .catch(next);
}

function createRoute(req, res, next) {
  if (Array.isArray(req.body)) {
    // Add the current user to each element of the purchase array
    req.body.forEach(purchase => {
      purchase.user = req.tokenUserId;
      purchase._id = null;
    });
  } else {
    // There is only one item in the purchase. Add the current user to it.
    req.body.user = req.tokenUserId;
    req.body._id = null;
  }
  Purchase.create(req.body)
    .then(purchase => res.json(purchase))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  userIndex: userIndexRoute
};
