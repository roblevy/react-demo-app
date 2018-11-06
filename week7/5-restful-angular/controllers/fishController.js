const Fish = require('../models/fish');

function indexRoute(req, res, next) {
  Fish.find().then(fishes => res.json(fishes))
    .catch(next);
}
function showRoute(req, res, next) {
  Fish.findById(req.params.id)
    .then(fish => res.json(fish))
    .catch(next);
}

function createRoute(req, res, next) {
  Fish.create(req.body)
    .then(fish => res.json(fish))
    // Hand on any errors to the error handler
    .catch(next);
}

function updateRoute(req, res, next) {
  // // This method sends back the old fish,
  // // not the updated one!
  // Fish.findByIdAndUpdate(req.params.id, req.body)
  //   .then(fish => res.json(fish));
  // Here's how to send back the updated fish:
  Fish.findById(req.params.id)
    .then(fish => fish.set(req.body))
    .then(fish => fish.save())
    .then(fish => res.json(fish))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Fish.findByIdAndDelete(req.params.id)
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