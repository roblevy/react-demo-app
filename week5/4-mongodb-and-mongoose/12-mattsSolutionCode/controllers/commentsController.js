const Puppy = require('../models/puppy');

function commentsCreate(req, res) {
  Puppy
    .findById(req.params.id)
    .then(puppy => {
      puppy.comments.push(req.body);
      puppy.save().then(puppy => res.redirect(`/puppies/${puppy.id}`));
    });
}

module.exports = {
  create: commentsCreate
};
