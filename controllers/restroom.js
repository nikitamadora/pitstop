// RESTROOM CONTROLLER
// Bringing in the database from the models folder since we'll need to manipulate our database

const db = require('../models');

const index = (req, res) => {
     db.Restroom.find({}, (err, foundRestrooms) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.' });

          res.json(foundRestrooms);
     });
};

const show = (req, res) => {
     db.Restroom.findById(req.params.id, (err, foundRestroom) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.'});
     
          res.json(foundRestroom);
     });
};

const create = (req, res) => {
     db.Restroom.create(req.body, (err, newRestroom) => {
          if (err) return res.json(err);

          res.json(newRestroom);
     });
};

const update = (req, res) => {
     db.Restroom.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedRestroom) => {
          if (err) return res.status(400).json({ status: 400, error:'Something went wrong, please try again.'});

          res.json(updatedRestroom);
     });
};

const destroy = (req, res) => {
     db.Restroom.findByIdAndDelete(req.params.id, (err, deletedRestroom) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.' });

          res.json(deletedRestroom);
     });
};

module.exports = {
     index,
     show,
     create,
     update,
     destroy
};