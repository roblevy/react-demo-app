const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String
});

userSchema.pre('save', function() {
  this.password = bcrypt.hashSync(this.password, 8);
});

userSchema.methods.validatePassword = function(attemptedPassword) {
  return bcrypt.compareSync(attemptedPassword, this.password);
};

userSchema.virtual('dessertsCreated', {
  ref: 'Dessert',
  localField: '_id',
  foreignField: 'createdBy'
});

userSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('User', userSchema);
