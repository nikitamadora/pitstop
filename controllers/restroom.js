// RESTROOM CONTROLLER
// Bringing in the database from the models folder since we'll need to manipulate our database

const db = require('../models');

const index = (req, res) => {
     // This route will need Mongoose code for how to find every instance of the Restroom model in our database
     db.Restroom.find({}, (err, foundRestrooms) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.' });

          res.json(foundRestrooms);
     });
};

const show = (req, res) => {
     // This route will need Mongoose code for how to find one instance of the Restroom model in our database
     // Test by uncommenting the following:
     // res.send('Testing restroom show route');
};

const create = (req, res) => {
     // This route will need Mongoose code for how to create one instance of the Restroom model in our database
     // Test by uncommenting the following:
     // res.send('Testing restroom create route');
};

const update = (req, res) => {
     // This route will need Mongoose code for how to update one instance of the Restroom model in our database
     // Test by uncommenting the following:
     // res.send('Testing restroom update route');
};

const destroy = (req, res) => {
     // This route will need Mongoose code for how to delete one instance of the Restroom model in our database
     // Test by uncommenting the following:
     // res.send('Testing restroom destroy route');
};

module.exports = {
     index,
     // show,
     // create,
     // update,
     // destroy
};