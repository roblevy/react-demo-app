const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: String,
  username: String
});

userSchema.virtual('birdsCreated', {
  ref: 'Bird',
  localField: '_id',
  foreignField: 'user'
})

module.exports = mongoose.model('User', userSchema);
