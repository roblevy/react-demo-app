const mongoose = require('mongoose');

const dessertSchema = mongoose.Schema({
  name: String,
  countryOfOrigin: String,
  imageUrl: String,
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

dessertSchema.virtual('firstLetter')
  .get(function() {
    return this.name[0];
  });

dessertSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Dessert', dessertSchema);
