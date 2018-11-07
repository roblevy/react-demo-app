const Dessert = require('../models/dessert');

function indexRoute(req, res, next) {
  Dessert.find().then(desserts => res.json(desserts))
    .catch(next);
}
function showRoute(req, res, next) {
  Dessert.findById(req.params.id)
    .then(dessert => res.json(dessert))
    .catch(next);
}

function createRoute(req, res, next) {
  Dessert
    .create(req.body)
    .then(dessert => res.json(dessert))
    .catch(next);
}

function updateRoute(req, res, next) {
  Dessert
    .findById(req.params.id)
    .then(dessert => dessert.set(req.body))
    .then(dessert => dessert.save())
    .then(dessert => res.json(dessert))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Dessert
    .findById(req.params.id)
    .then(dessert => dessert.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
