const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const db = require('../models');

// Path starts at 'api/v1'

// -----------------------
//     Cities Routes
// -----------------------

// Index API Route
router.get('/cities', (req, res) => {
     db.City.find({}, (err, foundCities) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.' });

          res.json(foundCities);
     });
});
// router.get('/cities/:id', ctrl.cities.show);
// router.post('/cities', ctrl.cities.create);

// -----------------------
//    Restrooms Routes
// -----------------------

// Index API Route
router.get('/restrooms', (req, res) => {
     db.Restroom.find({}, (err, foundRestrooms) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.' });

          res.json(foundRestrooms);
     });
});

// Individual Restroom API Route
router.get('/restrooms/:id', (req, res) => {
     db.Restroom.findById(req.params.id, (err, foundRestroom) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.'});
     
          res.json(foundRestroom);
     });
});
// router.post('/restrooms', ctrl.restrooms.create);
// router.put('/restrooms/:id', ctrl.restrooms.update);
// router.delete('/restrooms/:id', ctrl.restrooms.destroy);

// -----------------------
//      Export Router
// -----------------------
module.exports = router;

