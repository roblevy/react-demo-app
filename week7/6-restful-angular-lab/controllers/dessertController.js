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

}

function updateRoute(req, res, next) {

}

function deleteRoute(req, res, next) {

}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
