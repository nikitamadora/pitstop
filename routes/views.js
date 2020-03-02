// Aurelie, try this on your own :)
// See api.js for notes

const express = require('express');
const router = express.Router();

//  Home page
// -----------------------------------------
router.get('/', (req, res) => {
  res.sendFile('views/index.html', {
    root: __dirname + '/../'
  });
});


//   Show all restrooms
// -----------------------------------------
router.get('/restrooms', (req, res) => {
  res.sendFile('views/results.html', {
    root: __dirname + '/../',
  });
});

//   Show form to edit new restroom
// -----------------------------------------
router.get('/restrooms/new', (req, res) => {
  res.sendFile('views/restrooms/new.html', {
    root: __dirname + '/../',
  });
});

//   Show One restroom
// -----------------------------------------
router.get('/restrooms/:restroomId', (req, res) => {
  res.sendFile('views/restrooms/show.html', {
    root: __dirname + '/../',
  })    
});

//   Create One restroom
// -----------------------------------------
router.post('/restrooms', (req, res) => {
  res.sendFile('views/restrooms/new.html', {
    root: __dirname + '/../',
  });
});

//   Update One restroom
// -----------------------------------------
router.put('/restrooms/:restroomId', (req, res) => {
  res.sendFile('views/restrooms/update.html', {
    root: __dirname + '/../',
  });
});

//   Delete One restroom
// -----------------------------------------
router.delete('/restrooms/:restroomId', (req, res) => {
  res.sendFile('views/restrooms/delete.html', {
    root: __dirname + '/../',
  });
});

module.exports = router;