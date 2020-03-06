const db = require('../models');

const index = (req, res) => {
  db.City.find({}, (err, foundCities) => {
    if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.' });

    res.json(foundCities);
  });
};

const update = (req, res) => {
  // Selects a city within the db that matches the cityState in the restroom db entry
  db.City.findOne({ cityState: req.body.cityState }, (err, foundCity) => {
    if (err) {
      return res.status(400).json({ status: 400, error:'Something went wrong, please try again.'});
    };

    for (let i = 0; i < foundCity.restrooms.length; i++) {
      const targetRestroom = foundCity.restrooms[i];
      const updatedRestroom = req.body;
      if (foundCity.restrooms[i].id === req.params.id) {
        Object.assign(targetRestroom, updatedRestroom);
      }
    };

    foundCity.save((err, savedCity) => {
      // TODO expand error response
      if (err) return res.json(err);

      res.json(savedCity); 
    });
  });
};

module.exports = {
  index,
  update };