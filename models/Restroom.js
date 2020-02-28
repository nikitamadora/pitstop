const mongoose = require('mongoose');

const RestroomSchema = new mongoose.Schema({
     street: {
          type: String,
          required: true
     },
     neighborhood: String,
     geolocation: [Number],
     active: Boolean,
     accessible: Boolean,
     genderNeutral: Boolean,
     changingStation: Boolean,
     reqPurchase: Boolean,
     sanitaryProducts: Boolean,
     starRating: Number
});

module.exports = mongoose.model('Restroom', RestroomSchema);