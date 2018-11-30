const Purchase = require('../models/purchase');

function indexRoute(req, res, next) {
  Purchase.find()
    .then(purchases => res.json(purchases))
    .catch(next);
}

function createRoute(req, res, next) {
  if (Array.isArray(req.body)) {
    // Add the current user to each element of the purchase array
    req.body.forEach(purchase => purchase.user = req.currentUser._id);
  } else {
    req.body.user = req.currentUser._id;
  }
  Purchase.create(req.body)
    .then(purchase => res.json(purchase))
    .catch(next);
}

function userIndexRoute(req, res, next) {
  Purchase.find({ user: req.currentUser._id })
    .populate('burger')
    .then(purchases => res.json(purchases))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  userIndex: userIndexRoute
};
