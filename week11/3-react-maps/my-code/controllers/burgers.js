const Burger = require('../models/burger');

function indexRoute(req, res, next) {
  console.log('in controller!');
  Burger
    .find()
    .exec()
    .then(burgers => res.json(burgers))
    .catch(next);
}

function showRoute(req, res, next) {
  Burger
    .findById(req.params.id)
    .populate('comments.user')
    .exec()
    .then(burger => res.json(burger))
    .catch(next);
}

function createRoute(req, res, next) {
  console.log(req.body);
  Burger
    .create(req.body)
    .then(burger => res.status(201).json(burger))
    .catch(next);
}

function updateRoute(req, res, next) {
  Burger
    .findById(req.params.id)
    .exec()
    .then(burger => {
      Object.assign(burger, req.body);
      return burger.save();
    })
    .then(burger => res.json(burger))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Burger
    .findById(req.params.id)
    .exec()
    .then(burger => burger.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser;
  Burger
    .findById(req.params.id)
    .populate('comments.user')
    .exec()
    .then(burger => {
      burger.comments.push(req.body);
      return burger.save();
    })
    .then(burger => res.json(burger))
    .catch(next);
}

function commentDeleteRoute(req, res, next) {
  Burger
    .findById(req.params.id)
    .populate('comments.user')
    .then(burger => {
      const comment = burger.comments.id(req.params.commentId);
      if(!comment.user._id.equals(req.currentUser._id)) {
        throw new Error('Unauthorized');
      }
      comment.remove();
      return burger.save();
    })
    .then(burger => res.json(burger))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
};
