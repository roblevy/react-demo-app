const Burger = require('../models/burger');

function indexRoute(req, res, next) {
  Burger.find()
    .then(burgers => res.json(burgers))
    .catch(next);
}

function showRoute(req, res, next) {
  Burger.findById(req.params.id)
    .populate('ratings.user')
    .then(burger => res.json(burger))
    .catch(next);
}

function createRoute(req, res, next) {
  Burger.create(req.body)
    .then(burger => res.status(201).json(burger))
    .catch(next);
}

function updateRoute(req, res, next) {
  Burger.findById(req.params.id)
    .then(burger => burger.set(req.body))
    .then(burger => burger.save())
    .then(burger => res.json(burger))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Burger.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

function commentCreateRoute(req, res, next) {
  req.body.user = req.tokenUserId;
  Burger.findById(req.params.id)
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
  Burger.findById(req.params.id)
    .populate('comments.user')
    .then(burger => {
      const comment = burger.comments.id(req.params.commentId);
      if(!comment.user._id.equals(req.tokenUserId)) {
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
