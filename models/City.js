const mongoose = require('mongoose');
// TODO Reactivate once we have our Restroom model
// const Restroom = require('./Restroom');

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
     restrooms: [Restroom.Schema],
     geolocation: [Number]
});

module.exports = mongoose.model('City', CitySchema);
