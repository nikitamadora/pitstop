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

router.get('/restrooms', ctrl.restroom.index);
router.get('/restrooms/:id', ctrl.restroom.show);
router.post('/restrooms', ctrl.restroom.create);
router.put('/restrooms/:id', ctrl.restroom.update);
router.delete('/restrooms/:id', ctrl.restroom.destroy);

// -----------------------
//      Export Router
// -----------------------
module.exports = router;

