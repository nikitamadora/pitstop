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

// New Restroom API Route
router.post('/restrooms', (req, res) => {
     db.Restroom.create(req.body, (err, newRestroom) => {
          if (err) return res.json(err);

          res.json(newRestroom);
     });
});

// Update Restroom API Route
router.put('/restrooms/:id', (req, res) => {
     db.Restroom.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedRestroom) => {
          if (err) return res.status(400).json({ status: 400, error:'Something went wrong, please try again.'});

          res.json(updatedRestroom);
     });
});

// router.delete('/restrooms/:id', ctrl.restrooms.destroy);
router.delete('/restrooms/:id', (req, res) => {
     console.log(`Deleted ${req.params.locationName}`);
     db.Restroom.findByIdAndDelete(req.params.id, (err, deletedRestroom) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.' });

          res.json(deletedRestroom);
     });
});

// -----------------------
//      Export Router
// -----------------------
module.exports = router;

