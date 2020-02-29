// We're bringing in our database from the models folder, since we need to manipulate our database

const db = require('../models');

const index = (req, res) => {
     db.City.find({}, (err, foundCity) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again' });

          res.json(foundCity);
     })
};

// (Kita:) I'm not sure if we need these yet...
// const show = (req, res) => {
//      // this route will need Mongoose code for how to find one instance of the City model in our database
//      // test by uncommenting this:
//      // res.send('testing cities show route');
// };

// const create = (req, res) => {
//      // this route will need Mongoose code for how to create every instance of the City model in our database
//      // test by uncommenting this:
//      // res.send('testing cities create route');
// };

module.exports = {
     index };
     // show,
     // create
// }