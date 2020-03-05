const mongoose = require('mongoose');
const Restroom = require('./Restroom');

const CitySchema = new mongoose.Schema({
     cityState: {
          type: String,
          required: true
     },
     country: {
          type: String,
          required: true
     },
     restrooms: [Restroom.schema]
});

module.exports = mongoose.model('City', CitySchema);
