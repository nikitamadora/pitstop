const mongoose = require('mongoose');
const Restroom = require('./Restroom');

const CitySchema = new mongoose.Schema({
     cityName: {
          type: String,
          required: true
     },
     state: String,
     country: {
          type: String,
          required: true
     },
     restrooms: [Restroom.schema]
});

module.exports = mongoose.model('City', CitySchema);
