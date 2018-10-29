const Puppy = require('../models/puppy');

function commentsCreate(req, res) {
  Puppy
    .findById(req.params.id)
    .then(puppy => {
      puppy.comments.push(req.body);
      puppy.save().then(puppy => res.redirect(`/puppies/${puppy.id}`));
    });
}

function commentsDelete(req, res) {
  Puppy
    .findById(req.params.puppyId)
    .then(puppy => {
      puppy.comments.id(req.params.commentId).remove();
      puppy.save().then(() => res.redirect(`/puppies/${puppy.id}`));
    });
}

module.exports = {
  create: commentsCreate,
  delete: commentsDelete
};
