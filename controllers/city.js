const db = require('../models');

const index = (req, res) => {
     db.City.find({}, (err, foundCities) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.' });

          res.json(foundCities);
     });
};

// Still working on these... transitioning to front-end research and whiteboarding this issue
// const show = (req, res) => {
//      db.City.findOne({ cityName: req.body.cityName}, (err, foundCity))};

// const create = (req, res) => {
//      db.Restroom.create(req.body, (err, newRestroom) => {});

// };

module.exports = {
     index };
     // show,
     // create
// }