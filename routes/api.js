const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const db = require('../models');

// Path starts at 'api/v1'

// -----------------------
//     Cities Routes
// -----------------------

router.get('/cities', (req, res) => {
     db.City.find({}, (err, foundCity) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again' });

          res.json(foundCity);
     })
});
// router.get('/cities/:id', ctrl.cities.show);
// router.post('/cities', ctrl.cities.create);

// -----------------------
//    Restrooms Routes
// -----------------------

// router.get('/restrooms', ctrl.restrooms.index);
// router.get('/restrooms/new', ctrl.restrooms.show);
// router.post('/restrooms', ctrl.restrooms.create);
// router.put('/restrooms/:id', ctrl.restrooms.update);
// router.delete('/restrooms/:id', ctrl.restrooms.destroy);

// -----------------------
//      Export Router
// -----------------------
module.exports = router;

