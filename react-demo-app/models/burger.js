const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comment: { type: String, required: true },
  score: { type: Number, min: 1, max: 5 }
});

const burgerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  restaurant: String,
  address: String,
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  suitableFor: [{
    type: String, enum: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'kosher', 'halal']
  }],
  description: String,
  image: String,
  ratings: [ ratingSchema ]
});

burgerSchema.virtual('avgRating')
  .get(function() {
    return Math.round(this.ratings.reduce((sum, rating) => {
      return sum + rating.score;
    }, 0) / this.ratings.length);
  });

burgerSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Burger', burgerSchema);
