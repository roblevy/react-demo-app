const Fish = require('../models/fish');
const jwt = require('jsonwebtoken');

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
  console.log('These are the headers of the request', req.headers);
  // Remove the Bearer bit from the start of the header:
  const token = req.headers.authorization.replace('Bearer ', '');
  // Check the token matches our secret with jwt.verify.
  // 3 arguments: token, secret, callback function which runs if
  // the token checks out
  jwt.verify(token, 'blues brothers', function(err, data) {
    // If err is undefined, we know the token checked out.
    // Otherwise it was bad.
    if (err) {
      // The token was bad
      res.status(401).json({ message: 'Unauthorised!' });
    } else {
      Fish.create(req.body)
        .then(fish => res.json({fish, data}))
        // Hand on any errors to the error handler
        .catch(next);
    }
  });
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
