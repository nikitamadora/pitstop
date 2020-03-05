const db = require('../models');

const index = (req, res) => {
     db.City.find({}, (err, foundCities) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.' });

          res.json(foundCities);
     });
};

module.exports = {
     index };