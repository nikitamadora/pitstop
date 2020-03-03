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

// RestroomSchema.methods.transformBoolean = function (booleanValue) {
//      if (booleanValue === true) {
//           this.booleanValue = '<img src="/Users/aurelie/sei/projects/Project_1_PitStop/assets/icons8-checked-checkbox-48.png" alt="checked box">'
//      } 
// };


module.exports = mongoose.model('Restroom', RestroomSchema);