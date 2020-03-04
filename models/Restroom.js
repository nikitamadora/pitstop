const mongoose = require('mongoose');

const RestroomSchema = new mongoose.Schema({
  locationName: {
    type: String,
    required: true
  },
  streetAddress: {
    type: String,
    required: true
  },
  cityState: {
    type: String,
    required: true
  },
  longitude: Number,
  latitude: Number,
  directions: String,
  hours: String,
  accessible: Boolean,
  genderNeutral: Boolean,
  changingStation: Boolean,
  reqPurchase: Boolean,
  sanitaryProducts: Boolean,
  starRating: Number
});

module.exports = mongoose.model('Restroom', RestroomSchema);