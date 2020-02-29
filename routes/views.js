const express = require('express');
const router = express.Router();

// Index View
router.get('/', (req, res) => {
     res.sendFile('/views/index.html', {
          root: __dirname + '/../'
     });
});

// Results View
// router.get('/results/', (req, res) => {
//      res.sendFile('views/results.html', {
//           root: __dirname + '/../'
//      });
// });

module.exports = router;