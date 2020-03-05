const mongoose = require('mongoose');
const Restroom = require('./Restroom');

const CitySchema = new mongoose.Schema({
     cityState: {
          type: String,
          // required: true
     },
     country: {
          type: String,
    //       // required: true
     },
     restrooms: [Restroom.schema]
});

// const CitySchema = new mongoose.Schema({
//   cityName: String,
// });

module.exports = mongoose.model('City', CitySchema);
