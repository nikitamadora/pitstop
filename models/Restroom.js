const mongoose = require('mongoose');

const RestroomSchema = new mongoose.Schema({
     locationName: {
          type: String,
          required: true
     },
     streetAddress: String,
     neighborhood: String,
     longitude: Number,
     latitude: Number,
     directions: String,
     hours: String,
     active: Boolean,
     accessible: Boolean,
     genderNeutral: Boolean,
     changingStation: Boolean,
     reqPurchase: Boolean,
     sanitaryProducts: Boolean,
     starRating: Number
});

module.exports = mongoose.model('Restroom', RestroomSchema);