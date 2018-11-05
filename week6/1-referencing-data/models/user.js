const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String
});

userSchema.virtual('comments', {
  ref: 'Puppy',
  localField: '_id',
  foreignField: 'comments.user'
});

userSchema.virtual('addedPuppies', {
  ref: 'Puppy',
  localField: '_id',
  foreignField: 'addedBy'
});

module.exports = mongoose.model('User', userSchema);
