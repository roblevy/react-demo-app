const Puppy = require('../models/puppy');

function indexRoute(req, res, next) {
  Puppy
    .find()
    .then(puppies => {
      const puppiesObject = {
        puppies: puppies
      };
      res.render('puppies/index', puppiesObject);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function showRoute(req, res, next) {
  Puppy
    .findById(req.params.id)
    .populate('comments.user addedBy')
    .then(puppy => {
      console.log(puppy);
      res.render('puppies/show', puppy);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function newRoute(req, res, next) {
  res.render('puppies/new');
  next();
}

function createRoute(req, res, next) {
  req.body.colors = req.body.colors.split(',');
  Puppy
    .create(req.body)
    .then(puppy => res.redirect(`/puppies/${puppy._id}`))
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function editRoute(req, res, next) {
  Puppy
    .findById(req.params.id)
    .then(puppy => res.render('puppies/edit', puppy))
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function updateRoute(req, res, next) {
  Puppy
    .findByIdAndUpdate(req.params.id, req.body)
    .then(puppy => res.redirect(`/puppies/${puppy._id}`))
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function deleteRoute(req, res, next) {
  Puppy
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/puppies'))
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
