const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Path starts at 'api/v1'

// -----------------------
//     Cities Routes
// -----------------------

// ---> We probably don't need the index, update and delete:
// router.get('/cities', ctrl.cities.index);
router.get('/cities/:id', ctrl.cities.show);
router.post('/cities', ctrl.cities.create);
// router.put('/cities/:id', ctrl.cities.update);
// router.delete('cities/:id', ctrl.cities.destroy);


// -----------------------
//    Restrooms Routes
// -----------------------

router.get('/restrooms', ctrl.restrooms.index);
router.get('/restrooms/:restroomId', ctrl.restrooms.show);
router.post('/restrooms', ctrl.restrooms.create);
router.put('/restrooms/:restroomId', ctrl.restrooms.update);
router.delete('restrooms/:restroomId', ctrl.restrooms.destroy);


module.exports = router;
