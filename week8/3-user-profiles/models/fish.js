const mongoose = require('mongoose');

const fishSchema = mongoose.Schema({
  name: String,
  latinName: String,
  imageUrl: String,
  // Which user was a particular fish created by?
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

fishSchema.virtual('fullName')
  .get(function() {
    return `${this.name} (${this.latinName})`;
  });

fishSchema.virtual('firstLetter')
  .get(function() {
    return this.name[0];
  });

// include virtuals in res.json
fishSchema.set('toJSON', {
  virtuals: true
});

const fishModel = mongoose.model('Fish', fishSchema);
module.exports = fishModel;
