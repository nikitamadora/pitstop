// We're bringing in our database from the models folder, since we need to manipulate our database

// (Kita) I don't know if this is what we'll keep yet...

const db = require('../models');

const index = (req, res) => {
     // this route will need Mongoose code for how to find every instance of the City model in our database
     // we can test this route by uncommenting the code below
     // res.send('testing cities index route');
};

const show = (req, res) => {
     // this route will need Mongoose code for how to find one instance of the City model in our database
     // test by uncommenting this:
     // res.send('testing cities show route');
};

const create = (req, res) => {
     // this route will need Mongoose code for how to create every instance of the City model in our database
     // test by uncommenting this:
     // res.send('testing cities create route');
};

module.exports = {
     index,
     show,
     create
}