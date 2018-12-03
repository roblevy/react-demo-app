const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  rating: { type: Number, min: 1, max: 5 }
});

const burgerSchema = new mongoose.Schema({
  name: { type: String, required: 'This field is required' },
  restaurant: { type: String, required: 'This field is required' },
  address: { type: String },
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  suitableFor: [{
    type: String, enum: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'kosher', 'halal']
  }],
  price: { type: Number, required: 'This field is required' },
  description: { type: String, required: 'This field is required' },
  image: { type: String, required: 'This field is required' },
  comments: [ commentSchema ]
});

burgerSchema.virtual('avgRating')
  .get(function() {
    return Math.round(this.comments.reduce((sum, comment) => {
      return sum + comment.rating;
    }, 0) / this.comments.length);
  });

burgerSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Burger', burgerSchema);
